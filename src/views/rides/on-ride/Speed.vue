<script setup>
import Tacho from "@/views/rides/on-ride/Tacho.vue";
import {useRideServiceStore} from "@/stores/RideServiceStore";

let rideService = useRideServiceStore();

</script>

<template>
  <div id="speed">
    {{ rideService.speed }}
    <tacho></tacho>
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