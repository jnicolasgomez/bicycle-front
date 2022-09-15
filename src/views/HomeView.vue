<template>
  <div class="home">
    <h1>Red Bicicletas Mapa</h1>
    <BicycleMap :bicycles = "bicycles" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BicycleMap from '../components/BicycleMap.vue'
import {getBicycles} from '../services/bicyclesService'
import Bicycle from '../types/Bicycle';
export default defineComponent({
  name: 'HomeView',
  components: {
    BicycleMap,
  },
  setup () {
    const bicycles = ref<Bicycle[]>([]);
    return { bicycles }
  },
  async mounted() {
    const response = await getBicycles();
    this.bicycles = response;
  },
});
</script>

<style scoped>
  h1 {
        max-width: 960px;
        margin: 20px auto;
    }
</style>
