<script setup>
import {Map, MapStyle, config} from '@maptiler/sdk';
import {shallowRef, onMounted, onUnmounted, markRaw} from 'vue';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import {useMobileStore} from "@/stores/MobileStore";
import * as dotenv from "dotenv";

let mobile = useMobileStore();

const mapContainer = shallowRef(null);
const map = shallowRef(null);

onMounted(() => {

  config.apiKey = import.meta.env.VITE_API_KEY;

  const initialState = {lng: 139.753, lat: 35.6844, zoom: 14};

  map.value = markRaw(new Map({
    container: mapContainer.value,
    style: MapStyle.STREETS,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom
  }));

});

onUnmounted(() => {
  map.value?.remove();
});

</script>

<template>
  <div class="map-wrap">
    <div class="map" ref="mapContainer"></div>
  </div>
</template>

<style scoped>
.map-wrap {
  position: relative;
  width: 100%;
  height: calc(100vh + 35px);
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>