<template>
  <div class="home">
    <h1>Red Bicicletas Mapa</h1>
    <BicycleMap />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import BicycleMap from '../components/BicycleMap.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    BicycleMap,
  },
  setup () {
  },
  async created() {
    const store = useStore();
    await store.dispatch('getBicycles');
  },
});
</script>

<style scoped>
  h1 {
        max-width: 960px;
        margin: 20px auto;
    }
</style>
