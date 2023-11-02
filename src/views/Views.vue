<script setup>
import {useParameterStore} from "@/stores/ParameterStore";

import OnRide from "@/views/rides/OnRide.vue";
import OffRide from "@/views/rides/OffRide.vue";

let parameters = useParameterStore();
</script>

<template>
  <on-ride v-show="parameters.isOffRide"></on-ride>
<!--  <off-ride v-show="parameters.isOffRide"></off-ride>-->
</template>

<style>
</style>