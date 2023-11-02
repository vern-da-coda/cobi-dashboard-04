<script>
import Speed from "@/views/rides/on-ride/Speed.vue";

export default {
  components: {
    Speed
  },
}
</script>

<template>
  <div id="on-ride">
    ON
    <speed></speed>
  </div>
</template>

<style scoped>
#on-ride {
  padding-left: 140px;
  border: 1px red solid;
  top:0;
  right: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>