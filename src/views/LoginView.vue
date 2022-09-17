<template>
	<form @submit.prevent="login">
		<h2>Ingresar</h2>
		<label>Usuario</label>
		<input v-model="loginForm.email" type="email" placeholder="Email address" required>
		<label>Contraseña</label>
		<input  v-model="loginForm.password" type="password" placeholder="Password" required>
		<button> Ingresar </button>
		<GoogleLogin :callback="handleSignIn" prompt style="margin: 20px 5px 20px 5px"/>
	</form>

	<form @submit.prevent="register">
		<h2>Registrar</h2>
		<label>Usuario</label>
		<input v-model="registerForm.email" type="text" placeholder="Email address" required>
		<label>Contraseña</label>
		<input  v-model="registerForm.password" type="password" placeholder="Password" required>
		<button> Registrar </button>
	</form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { GoogleLogin, decodeCredential } from 'vue3-google-login';

//TODO: Finish Register https://www.youtube.com/watch?v=Kc-FbPSdezg&t=1611s&ab_channel=TylerPotts
export default defineComponent({
	setup() {

		const registerForm = ref({});
		const loginForm = ref({});
		const store = useStore();

		const login = () => {
			store.dispatch('login', loginForm.value);
		}

		const register = () => {
			store.dispatch('register', registerForm.value);
		}
		return {
			registerForm, loginForm, login, register
		};
	},
	components: {
		GoogleLogin
	},
	methods: {
		async handleSignIn(response) {
			// decodeCredential will retrive the JWT payload from the credential
			const userData = decodeCredential(response.credential)
			console.log("Handle the userData", userData)
		}
	}
})
</script>

<style scoped>
	form {
		max-width: 250px;
		background: white;
		margin: 30px auto;
		text-align: left;
		padding: 40px;
		border-radius: 10px;
		box-shadow: 3px 3px 7px rgba(0,0,0,0.4);
	}
	label {
		color: gray;
		display: inline-block;
		margin: 25px 0 15px;
		font-size: 0.6em;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: bold;
	}
	input, select {
		display: block;
		padding: 10px 6px;
		widows: 100%;
		box-sizing: border-box;
		border: none;
		border-bottom: 1px solid gray;
		color: black;
	}

	button {
		background: #0b6dff;
		border: 0;
		padding: 10px 20px;
		margin-top: 20px;
		margin-right: 10px;
		color: white;
		border-radius: 20px;
		cursor:pointer;
		box-shadow: 3px 3px 7px rgba(0,0,0,0.4);
	}
	button:hover {
		background: #150183;
	}
	submit {
		text-align: center;
	}
</style>