<template>
  <div class="app">
    <h1>Friends & Bicycles</h1>
    <p>{{ name }} - {{ age }}</p>
    <BicycleList :bicycles = "bicycles" />
    <BicycleMap :bicycles = "bicycles" />
    <button @click="changeName('rob')"> Change Name</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import Bicycle from './types/Bicycle'
import BicycleList from './components/BicycleList.vue'
import BicycleMap from './components/BicycleMap.vue';

export default defineComponent({
  name: 'App',
  components: {BicycleList, BicycleMap},
  setup() {
    const state = reactive({
      name: 'Link',
      age: 25 as string | number
    })

    const bicycles = ref<Bicycle[]>([
      {
        color: 'red',
        model: 'Cliff',
        coordinates: [6.2476, -75.5658],
        id: '1'
      },
      {
        color: 'blue',
        model: 'Cannondale',
        coordinates: [6.24, -75.5658],
        id: '2'
      }
    ])

    return { ...toRefs(state), bicycles}
  },
  methods: {
    changeName(name: string) {
      this.name = name
      return name
    }
  }
})
</script>

<style>

</style>
