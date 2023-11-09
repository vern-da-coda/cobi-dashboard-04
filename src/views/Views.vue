<script setup>
import {useParameterStore} from "@/stores/ParameterStore";

import OnRide from "@/views/rides/OnRide.vue";
import OffRide from "@/views/rides/OffRide.vue";

let parameters = useParameterStore();

</script>

<template>
  <div id="on-ride-container">
    <on-ride v-show="parameters.isOffRide"/>
  </div>
  <div id="off-ride-container">
    <off-ride v-show="parameters.isOffRide"/>
  </div>
</template>