<script setup>
import Tacho from "@/views/rides/on-ride/Tacho.vue";
import Digit from "@/views/rides/on-ride/Digit.vue";
import {useRideServiceStore} from "@/stores/RideServiceStore";
import {useTourServiceStore} from "@/stores/TourServiceStore";

let rideService = useRideServiceStore();
let tourService = useTourServiceStore();

</script>

<template>
  <div id="speed">
    <div id="tacho">
      <tacho :speed="rideService.speed" :max-speed="rideService.maxSpeed"></tacho>
    </div>
    <digit :number="rideService.speed"></digit>
    <h2>{{ rideService.speed }}</h2>
    <h2> {{ tourService.getAverageSpeed }} </h2>
  </div>

</template>

<style scoped>
#speed {
  position: absolute;
  border: 1px solid blue;
  width: 20%;
  height: 20%;
  right: 20%;
  bottom: 20%;
  font-size: 40px;
}

#tacho {
//position: relative; //top: 10px;
}
</style>