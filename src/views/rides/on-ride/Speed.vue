<script setup>
import {useRideServiceStore} from "@/stores/RideServiceStore";

let rideService = useRideServiceStore();

</script>

<template>
  <div id="speed">
    {{ rideService.speed }}
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
}
</style>