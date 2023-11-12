<script setup>
import CadenceNumbers from "@/views/rides/on-ride/bottom-left/CadenceNumbers.vue";
import CadenceGraph from "@/views/rides/on-ride/bottom-left/CadenceGraph.vue";
import Panel from "@/components/rides/on-ride/Panel-Right.vue";

import {useRideServiceStore} from "@/stores/RideServiceStore";
import {useTourServiceStore} from "@/stores/TourServiceStore";

let rideService = useRideServiceStore();
let tourService = useTourServiceStore();
</script>

<template>
  <div id="cadence-graph">
    <cadence-graph
        :current-cadence="rideService.currentCadence"
        :max-cadence="rideService.getMaxCadence"
        :average-cadence="tourService.getAverageCadence"
    />
  </div>
  <div id="cadence-numbers">
    <cadence-numbers
        :current-cadence="rideService.currentCadence"
        :max-cadence="rideService.getMaxCadence"
        :average-cadence="tourService.getAverageCadence"
    />
  </div>
  <div>
    <panel/>
  </div>
</template>

<style scoped>
#cadence-graph {
  position: relative;
  top: 200px;
  left: 15px;
}

#cadence-numbers {
  color: #fff;
  position: relative;
  top: 35px;
  left: 25px;
}

</style>