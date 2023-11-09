<script setup>
import BackgroundMap from "@/views/rides/on-ride/BackgroundMap.vue";
import BottonRight from "@/views/rides/on-ride/BottonRight.vue";
import BottonLeft from "@/views/rides/on-ride/BottonLeft.vue";

</script>

<template>

  <div>
    <background-map/>
  </div>

  <div id="bottom-left">
    <botton-left/>
  </div>

  <div id="bottom-right">
    <botton-right/>
  </div>

</template>

<style scoped>
#bottom-left, #bottom-right {
  position: fixed;
  bottom: -10px;
}

#bottom-left {
  left: -10px;
}

#bottom-right {
  right: -10px;
}
</style>