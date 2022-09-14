<template>
    <form @submit.prevent="handleSubmit">
        <h1>Registrar Bicicleta</h1>
        <label>Modelo</label>
        <select required v-model="model">
            <option value="Ruta">Ruta</option>
            <option value="Cross">Cross</option>
            <option value="Mountain">Mountain</option>
        </select>
        <label>Marca</label>
        <input v-model="brand" type="text" required>
        <label>Color</label>
        <input  v-model="color" type="text" required>
        <label>Latitud</label>
        <input v-model="lat" type="number" step="0.0001" min="6.22" max="6.28" required>
        <label>Longitud</label>
        <input v-model="long" type="number" min="-75.6" max="-75.53" step="0.0001" required>
        <button>Registrar</button>
    </form>
</template>
<script lang="ts">
import Bicycle from '@/types/Bicycle'
import { defineComponent } from 'vue'
import {createBicycle} from '../services/bicyclesService'

export default defineComponent({
    setup() {
        
    },
    data() {
        return {
            model: '',
            color: 'gfhf',
            lat: 0,
            long: 0,
            brand: ''
        }
    },
    methods: {
        async handleSubmit() {
            const coordinates: [number, number] = [this.lat , this.long];
            const bicycle: Bicycle = {
                model: this.model,
                color: this.color,
                coordinates,
                brand: this.brand
            }
            const response = await createBicycle(bicycle);
            console.log(response)
        }
    }
})
</script>

<style scoped>
    form {
        max-width: 420px;
        background: white;
        margin: 30px auto;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    label {
        color: gray;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select {
        display: block;
        padding: 10px 6px;
        widows: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid gray;
        color: black;
    }

    button {
        background: #0b6dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        margin-right: 10px;
        color: white;
        border-radius: 20px;
        cursor:pointer;
    }
    submit {
        text-align: center;
    }
</style>
