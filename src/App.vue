<template>
  <div class="app">
    <h1>Red Bicicletas</h1>
    <p>{{ name }} - {{ age }}</p>
    <BicycleList :bicycles = "bicycles" />
    <BicycleMap :bicycles = "bicycles" />
    <button @click="changeName('rob')"> Change Name</button>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, reactive, ref, toRefs } from 'vue';
import Bicycle from './types/Bicycle';
import BicycleList from './components/BicycleList.vue';
import BicycleMap from './components/BicycleMap.vue';


export default defineComponent({
  name: 'App',
  components: {BicycleList, BicycleMap},
  setup() {
    const state = reactive({
      name: 'Link',
      age: 25 as string | number
    })

    const bicycles = ref<Bicycle[]>([]);
    const bicyclesUrl: string = process.env.BICYCLES_API || 'http://localhost:8080';

    return { ...toRefs(state), bicycles, bicyclesUrl}
  },
  async mounted() {
    const url = `${this.bicyclesUrl}/bicycles`;
    let response = await axios.get(url);
    this.bicycles = response.data;
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
