<script setup>
import SpeedNumbers from "@/views/rides/on-ride/bottom-right/SpeedNumbers.vue";
import SpeedGraph from "@/views/rides/on-ride/bottom-right/SpeedGraph.vue";
import Panel from "@/components/rides/on-ride/Panel-Left.vue";

import {useRideServiceStore} from "@/stores/RideServiceStore";
import {useTourServiceStore} from "@/stores/TourServiceStore";

let rideService = useRideServiceStore();
let tourService = useTourServiceStore();
</script>

<template>
  <div id="speed-graph">
    <SpeedGraph
        :current-speed="rideService.currentSpeed"
        :max-speed="rideService.getMaxSpeed"
        :average-speed="tourService.averageSpeed"/>
  </div>
  <div id="speed-numbers">
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
#speed-graph {
  position: relative;
  top: 205px;
  left: 0;
}

#speed-numbers {
  color: #fff;
  position: relative;
  top: 0;
  left: 0;
}
</style>