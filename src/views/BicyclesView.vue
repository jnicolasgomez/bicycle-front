<template>
  <div class="home">
    <BicycleList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import BicycleList from '../components/BicycleList.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    BicycleList
  },
  setup () {
  },
  async created() {
    const store = useStore();
    await store.dispatch('getBicycles');
  },
});
</script>
