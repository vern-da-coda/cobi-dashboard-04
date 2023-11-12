<script setup>
import PanelCenterLeft from "@/components/rides/on-ride/Panel-Center-Left.vue";
import PanelCenterRight from "@/components/rides/on-ride/Panel-Center-Right.vue";
</script>

<template>
  <div>
    <div>
      <div id="left">
        <panel-center-left/>
      </div>
      <div id="center">

      </div>
      <div id="right">
        <panel-center-right/>
      </div>
    </div>

  </div>
</template>

<style scoped>
#left, #center, #right, #background {
  display: inline-block;
  position: fixed;
}

#left {
  width: 200px;
  left: 60px;
}

#center {
  width: 50%;
  height: 30px;
  left: 230px;
}

#right {
  width: 200px;
  right: 90px;
}
</style>