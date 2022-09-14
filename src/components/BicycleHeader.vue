<template>
    <div class="nav">
        <a href="#">Red Bici</a>
        <a href="#">Register Bicycle</a>
        <a href="#">Bicycles</a>
        <a href="#">Map</a>
    </div>
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
