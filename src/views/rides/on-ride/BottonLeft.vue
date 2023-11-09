<script setup>
import Panel from "@/components/rides/on-ride/Panel-Left.vue";

import {useRideServiceStore} from "@/stores/RideServiceStore";
import {useTourServiceStore} from "@/stores/TourServiceStore";
import Cadence from "@/views/rides/on-ride/bottom-left/Cadence.vue";

let rideService = useRideServiceStore();
let tourService = useTourServiceStore();
</script>

<template>
  <div id="cadence">
    <cadence :cadence="rideService.cadence"/>
  </div>
  <div>
    <panel/>
  </div>
</template>

<style scoped>
#cadence {
  color: #fff;
  position: relative;
  top: 80px;
  left: 45px;
}
</style>