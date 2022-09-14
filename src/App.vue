<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="app">
    <BicycleHeader/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BicycleHeader from './components/BicycleHeader.vue'


export default defineComponent({
  name: 'App',
  components: {BicycleHeader},
  setup() {},
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
