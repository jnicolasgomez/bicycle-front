<template>
  <div class="form">
    <BicycleForm :type = "this.type" :bicycleId = "this.$route.params.id"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BicycleForm from '../components/BicycleForm.vue'
export default defineComponent({
  name: 'FormView',
  components: {
    BicycleForm
  },
  setup () {
  },
  props: {
    type: {
      required: true,
      type: String
    }
  },
  params: {
    bicycleId: {
      type: String
    }
  }
});
</script>
