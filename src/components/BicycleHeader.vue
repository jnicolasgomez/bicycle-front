<template>
    <div class="nav">
        <router-link to="/">Red Bici</router-link>
        <router-link to="/register" href="#">Register Bicycle</router-link>
    </div>
    <router-view/>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped>
.nav {
    background-color: rgb(31, 29, 29);
    overflow: hidden;
}

.nav a {
    float: left;
    color: white;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover {
    background: #ddd;
    color: #333;
}
</style>
