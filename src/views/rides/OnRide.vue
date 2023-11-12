<script setup>
import BackgroundMap from "@/views/rides/on-ride/BackgroundMap.vue";
import BottonRight from "@/views/rides/on-ride/BottonRight.vue";
import BottonLeft from "@/views/rides/on-ride/BottonLeft.vue";
import BottomCenter from "@/views/rides/on-ride/BottomCenter.vue";
</script>

<template>

  <div id="map">
    <background-map/>
  </div>

  <div id="center">
    <bottom-center/>
  </div>

  <div id="left">
    <botton-left/>
  </div>

  <div id="right">
    <botton-right/>
  </div>

  <div id="center-background"></div>

</template>

<style scoped>
#left, #right, #center {
  position: fixed;
  bottom: -10px;
  z-index: 1;
}

#left {
  right: -10px;
}

#center {
  height: 200px;
  bottom: -170px;
  margin-left: 18%;
  z-index: 2;
}

#center-background {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: #fff;
}

#right {
  left: -10px;
}
</style>