<template>
    <div class="map">
        <l-map v-model="zoom"
        v-model:zoom="zoom"
        :maxZoom="maxZoom"
        :minZoom="minZoom"
        :center="initialCoordinates"
        @click="addMarker"
        >
            <l-tile-layer
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></l-tile-layer>
            <l-control-layers />
            <l-marker v-for="bicycle in bicycles" :key="bicycle.id" :lat-lng="bicycle.coordinates ">
                <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
                <l-popup>
                    <p>{{bicycle.brand}} - {{bicycle.color}} [{{ bicycle.model }}]</p>
                    ({{bicycle.coordinates[0]}},{{bicycle.coordinates[1]}})
                </l-popup>
            </l-marker>
        </l-map>
    </div>
    
</template>

<script lang="ts">
    import { LMap, LTileLayer, LIcon, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
    import "leaflet/dist/leaflet.css"
    import { defineComponent } from "@vue/runtime-core";
import store from "@/store";

    export default defineComponent({
        components: {
            LMap,
            LTileLayer,
            LIcon,
            LMarker,
            LPopup
        },
        data() {
            return {
                zoom: 13,
                maxZoom: 18,
                minZoom: 10,
                initialCoordinates: [6.2476, -75.5658],
                iconWidth: 50,
                iconHeight: 50
            };
        },
        computed: {
            iconUrl() {
                return "https://storage.cloud.google.com/red-bicycle-assets/pin_svg7.svg"
            },
            iconSize(): [number, number] {
                return [this.iconWidth, this.iconHeight];
            },
            bicycles () {
                return store.getters.bicycles;
            }
        },
        methods: {
            log(a: string) {
                console.log(a);
            },
            addMarker(event: any) {
                if (event.latlng)
                    console.log(event.latlng);
            }
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
    .map p {
        font-weight: bold;
        margin: 10px 4px;
    }
</style>