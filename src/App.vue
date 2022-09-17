<template>
  <div class="app">
    <BicycleHeader/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import BicycleHeader from './components/BicycleHeader.vue'


export default defineComponent({
  name: 'App',
  components: {BicycleHeader},
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  },
  methods: {
  }
})
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
