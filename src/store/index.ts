import { createStore } from 'vuex'
import router from '@/router'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, User } from 'firebase/auth'
import Bicycle from '@/types/Bicycle'
import { getBicycles } from '@/services/bicyclesService'

export default createStore({
  state: {
    user: null,
    bicycles: []
  },
  getters: {
    user (state): User | null {
      return state.user;
    },
    bicycles (state): Bicycle[] {
      return state.bicycles;
    }
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user;
    },
    CLEAR_USER (state) {
      state.user = null;
    },
    SET_BICYCLES (state, bicycles) {
      state.bicycles = bicycles;
    },
  },
  actions: {
    async login ({ commit }, details ) {
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error:any) {
        console.log(error)
        switch(error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }
        return
      }
      
      commit('SET_USER', auth.currentUser)
      router.push('/')
    },
    async register ({ commit }, details) {
      const { email, password } = details;
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error:any) {
        switch(error.code) {
          case 'auth/email-already-in-use':
            alert("Email alreaady in use")
            break
          case 'auth/invalid-email':
            alert("Invalid Email")
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")
            break
          case 'auth/weak-password':
            alert("Weak password")
            break
          default:
            alert("Something went wrong")
        }
        return
      }
      
      commit('SET_USER', auth.currentUser)
      router.push('/')
    },
    async logout ({ commit }) {
      await signOut(auth)
      commit('CLEAR_USER')
      router.push('/login')
    },

    fetchUser({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)
          if (router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
      })
    },
    async getBicycles ({ commit } ) {
      let bicycles: Bicycle[] | null = [];
      try {
        bicycles = await getBicycles();
        commit('SET_BICYCLES', bicycles);
        localStorage.setItem('bicycles', JSON.stringify(bicycles));
      } catch (error: any ) {
        const localBicycles = localStorage.getItem('bicycles');
        if (localBicycles) {
          bicycles = JSON.parse(localBicycles) as Bicycle[];
          commit('SET_BICYCLES', bicycles);
        }
      }
    },
  },
  modules: {
  }
})
