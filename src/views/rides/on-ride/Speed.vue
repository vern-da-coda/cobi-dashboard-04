<script setup>
import Tacho from "@/views/rides/on-ride/Tacho.vue";
import {useRideServiceStore} from "@/stores/RideServiceStore";
import {useTourServiceStore} from "@/stores/TourServiceStore";

let rideService = useRideServiceStore();
let tourService = useTourServiceStore();

</script>

<template>
  <div id="speed">
    <h2>{{ rideService.speed }}</h2>
    <h2> {{ tourService.getAverageSpeed }}  </h2>
    <tacho :speed="rideService.speed"></tacho>
  </div>

</template>

<style scoped>
#speed {
  position: absolute;
  border: 1px solid blue;
  width: 900px;
  height: 600px;
  right: 0;
  bottom: 0;
  font-size: 40px;
}
</style>