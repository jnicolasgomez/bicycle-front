<template>
    <form @submit.prevent="handleSubmit">
        <h1>{{type}} Bicicleta</h1>
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
        <button> {{type}} </button>
    </form>
</template>
<script lang="ts">
import router from '@/router'
import Bicycle from '@/types/Bicycle'
import { defineComponent } from 'vue'
import {createBicycle, editBicycle} from '../services/bicyclesService'

export default defineComponent({
    setup() {
        
    },
    props: {
        type: {
            required: true,
            type: String
        },
        bicycleId: {
            type: String
        }
    },
    data() {
        return {
            model: '',
            color: '',
            lat: 6.25,
            long: -75.56,
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
            if (this.type === "Editar") {
                if (this.bicycleId) {
                    const response = await editBicycle(this.bicycleId, bicycle);
                    console.log('Bicycle edited successfully');
                    console.log(response);
                } else (
                    console.log('Error editing Bicycle')
                )
                
            } else if (this.type === "Crear") {
                const response = await createBicycle(bicycle);
                console.log('Bicycle created successfully');
                console.log(response);
            }
            router.push({ path: '/bicycles', replace: true });
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
