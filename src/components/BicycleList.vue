<template>
    <div class="bicycle-list">
        <ul>
            <li v-for="bicycle in bicycles" :key="bicycle.id">
                <h2>{{ bicycle.model }}</h2>
                <div class="color">
                    <p> {{ bicycle.color}} </p>
                </div>
                <div class="location">
                    <p> {{ bicycle.coordinates}} </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Bicycle from '@/types/Bicycle'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        bicycles: {
            required: true,
            type: Array as PropType<Bicycle[]>
        }
    }
})
</script>

<style scoped>
    .bicycle-list {
        max-width: 960px;
        margin: 40px auto;
    }
    .bicycle-list ul {
        padding: 0;
    }
    .bicycle-list li {
        list-style-type: none;
        background: white;
        padding: 16px;
        margin: 16px 0;
        border-radius: 4px;
    }
    .bicycle-list h2 {
        margin: 0 0 10px;
        text-transform: capitalize;
    }
    .color {
        display: flex;
    }
    .color p {
        font-weight: bold;
        margin: 10px 4px;
    }
</style>