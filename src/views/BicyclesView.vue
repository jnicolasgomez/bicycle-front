<template>
  <div class="home">
    <BicycleList :bicycles = "bicycles" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BicycleList from '../components/BicycleList.vue'
import {getBicycles} from '../services/bicyclesService'
import Bicycle from '../types/Bicycle';
export default defineComponent({
  name: 'HomeView',
  components: {
    BicycleList
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
