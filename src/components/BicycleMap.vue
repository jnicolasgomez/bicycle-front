<template>
    <div class="map">
        <l-map v-model="zoom"
        v-model:zoom="zoom"
        :center="initialCoordinates"
        @move="log('move')"
        >
            <l-tile-layer
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></l-tile-layer>
            <l-control-layers />
            <l-marker v-for="bicycle in bicycles" :key="bicycle.id" :lat-lng="bicycle.coordinates ">
                <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
                <l-popup>
                    <p>{{ bicycle.id }}</p>
                    {{bicycle.coordinates}}
                </l-popup>
            </l-marker>
        </l-map>
    </div>
    
</template>

<script lang="ts">
    import { LMap, LTileLayer, LIcon, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
    import "leaflet/dist/leaflet.css"
    import Bicycle from '@/types/Bicycle'
    import { defineComponent, PropType } from "@vue/runtime-core";
    export default defineComponent({
        components: {
            LMap,
            LTileLayer,
            LIcon,
            LMarker,
            LPopup
        },
        props: {
            bicycles: {
                required: true,
                type: Array as PropType<Bicycle[]>
            }
        },
        data() {
            return {
                zoom: 15,
                initialCoordinates: [6.2476, -75.5658],
                iconWidth: 25,
                iconHeight: 40
            };
        },
        computed: {
            iconUrl() {
                return `https://upload.wikimedia.org/wikipedia/commons/0/00/Bicycle-icon.svg`;
            },
            iconSize() {
                return [this.iconWidth, this.iconHeight];
            },
        },
        methods: {
            log(a: string) {
                console.log(a);
            },
            changeIcon() {
                this.iconWidth += 2;
                if (this.iconWidth > this.iconHeight) {
                    this.iconWidth = Math.floor(this.iconHeight / 2);
                }
            },
        },
    });
</script>

<style scoped>
    .map {
        height: 75vh;
        width: 50vw;
        margin: 40px auto;
        border: 3px solid gray;
    }
</style>