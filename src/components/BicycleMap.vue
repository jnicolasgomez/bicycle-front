<template>
    <l-map v-model="zoom"
      v-model:zoom="zoom"
      :center="[6.2476, -75.5658]"
      @move="log('move')"
      style="height: 50vh; width: 50vw">
        <l-tile-layer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-control-layers />
        <l-marker :lat-lng="[0, 0]" draggable @moveend="log('moveend')">
            <l-tooltip>
            lol
            </l-tooltip>
        </l-marker>

        <l-marker :lat-lng="[6.2476, -75.5658]">
            <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
        </l-marker>
        <l-geo-json :geojson="geojson" :options="geojsonOptions" />
    </l-map>
</template>

<script lan>
    import { LMap, LGeoJson, LTileLayer, LIcon, LMarker } from "@vue-leaflet/vue-leaflet";
    import "leaflet/dist/leaflet.css"
    import { defineComponent } from "@vue/runtime-core";
    export default defineComponent({
        components: {
            LMap,
            LGeoJson,
            LTileLayer,
            LIcon,
            LMarker
        },
        data() {
            return {
                zoom: 15,
                iconWidth: 25,
                iconHeight: 40,
                geojson: {
                    type: "FeatureCollection",
                    features: [
                    // ...
                    ],
                },
                geojsonOptions: {
                    // Options that don't rely on Leaflet methods.
                },
            };
        },
        async beforeMount() {
            // HERE is where to load Leaflet components!
            const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");
            console.log('before mount called')
            // And now the Leaflet circleMarker function can be used by the options:
            this.geojsonOptions.pointToLayer = (feature, latLng) =>
            circleMarker(latLng, { radius: 8 });
            this.mapIsReady = true;
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
            log(a) {
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
</style>