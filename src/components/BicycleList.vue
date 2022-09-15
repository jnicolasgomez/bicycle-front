<template>
    <div class="bicycle-list">
        <ul>
            <li v-for="bicycle in bicycles" :key="bicycle._id">
                <h2>{{ bicycle.model }}</h2>
                <div class="color">
                    <p> {{ bicycle.color}} </p>
                </div>
                <div class="location">
                    <p> {{ bicycle.coordinates}} </p>
                </div>
                <button @click="editBicycle(bicycle._id)" class="edit-button">Editar</button>
                <button @click="deleteBicycle(bicycle._id)" class="delete-button">Eliminar</button>
            </li>
        </ul>
        <button @click="addBicycle()" class="add-button"> + Crear Bicicleta</button>
    </div>
</template>

<script lang="ts">
import router from '@/router';
import { deleteBicycle } from '@/services/bicyclesService';
import Bicycle from '@/types/Bicycle'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        bicycleList: {
            required: true,
            type: Array as PropType<Bicycle[]>
        }
    },
    methods: {
        editBicycle(id: string) {
            router.push({ path: `/edit/${id}`, name:"edit", params: { id}});
        },
        addBicycle() {
            router.push({ path: `/create`, name:"create"});
        },
        async deleteBicycle( id: string) {
            const response = await deleteBicycle(id);
            if (response.deletedCount > 0) {
                const toRemove = this.bicycles.findIndex((obj) => obj._id === id);
                // eslint-disable-next-line vue/no-mutating-props
                this.bicycles.splice(toRemove, 1);
            }
            console.log(response);
        }
    },
    computed: {
        bicycles () {
            return this.bicycleList;
    }
}
})
</script>

<style scoped>
    .bicycle-list {
        max-width: 960px;
        margin: 20px auto;
    }
    .bicycle-list ul {
        padding: 0;
    }
    .bicycle-list li {
        list-style-type: none;
        background: white;
        padding: 16px;
        margin: 8px 0;
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

    button {
        background: #0b6dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 10px;
        color: white;
        border-radius: 20px;
        cursor:pointer;
        margin-right: 10px;
    }
    .delete-button {
        background: red;
    }
    .add-button {
        background: rgb(0, 134, 7);
    }
</style>