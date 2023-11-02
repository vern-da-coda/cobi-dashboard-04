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
<!--    <tacho></tacho>-->
  </div>

</template>

<style scoped>
#speed {
  position: absolute;
  border: 1px solid blue;
  width: 200px;
  height: 200px;
  right: 0;
  bottom: 0;
  font-size: 40px;
}
</style>