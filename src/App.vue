<template>
  <div class="app">
    <h1>Friends & Bicycles</h1>
    <p>{{ name }} - {{ age }}</p>
    <BicycleList :bicycles = "bicycles" />
    <BicycleMap/>
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
        location: '1287',
        id: '1'
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
