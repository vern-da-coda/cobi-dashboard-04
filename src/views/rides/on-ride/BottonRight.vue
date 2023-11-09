<script setup>
import Panel from "@/components/rides/on-ride/Panel-Right.vue";
import SpeedNumbers from "@/views/rides/on-ride/bottom-right/SpeedNumbers.vue";
import SpeedGraph from "@/views/rides/on-ride/bottom-right/SpeedGraph.vue";

import {useRideServiceStore} from "@/stores/RideServiceStore";
import {useTourServiceStore} from "@/stores/TourServiceStore";

let rideService = useRideServiceStore();
let tourService = useTourServiceStore();
</script>

<template>
  <div id="speedGraph">
    <SpeedGraph
        :current-speed="rideService.currentSpeed"
        :max-speed="rideService.getMaxSpeed"
        :average-speed="tourService.averageSpeed"/>
  </div>
  <div id="speedNumbers">
    <speed-numbers
        :current-speed="rideService.currentSpeed"
        :max-speed="rideService.getMaxSpeed"
        :average-speed="tourService.averageSpeed"/>
  </div>
  <div>
    <panel/>
  </div>
</template>

<style scoped>
#speedGraph {
  color: #fff;
  position: relative;
  top: 200px;
  left: 15px;
}

#speedNumbers {
  color: #fff;
  position: relative;
  top: 70px;
  left: 85px;
}
</style>