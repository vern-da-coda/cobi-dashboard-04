<script>
export default {
  props: {
    maxSpeed: Number,
    averageSpeed: Number,
    currentSpeed: Number,
  },
  methods: {
    splitSpeed() {
      return this.currentSpeed.toFixed(1).split('').reverse();
    },
    firstCharacter() {
      return this.splitSpeed()[3];
    },
    secondCharacter() {
      return this.splitSpeed()[2];
    },
    fractionCharacter() {
      return this.splitSpeed()[0];
    }
  }
};
</script>

<template>
  <div>
    <div id="max-speed">{{ maxSpeed }}</div>
    <div id="average-speed">{{ averageSpeed }}</div>
    <div id="current-speed">
      <div id="current-speed-first-character">{{ firstCharacter() }}</div>
      <div id="current-speed-second-character">{{ secondCharacter() }}</div>
      <div id="current-speed-comma">.</div>
      <div id="current-speed-fraction-character">{{ fractionCharacter() }}</div>
      <div id="current-speed-unit">km/h</div>
    </div>
  </div>
</template>

<style scoped>
#max-speed {
  font-size: 15px;
  top: 34px;
  left: 80px;
}

#average-speed {
  font-size: 15px;
  top: 34px;
  left: 120px;
}

#current-speed {
  top: 77px;
  left: 40px;
}

#current-speed, #current-speed div, #max-speed, #current-speed, #average-speed {
  display: block;
  position: absolute;
}

#current-speed-first-character, #current-speed-second-character, #current-speed-comma {
  font-size: 65px;
  top: 20px;
}

#current-speed-first-character {
  left: 0;
}

#current-speed-second-character {
  left: 36px;
}

#current-speed-fraction-character {
  font-size: 40px;
  top: 10px;
  left: 85px;
}

#current-speed-comma {
  left: 74px;
}

#current-speed-unit {
  font-size: 11px;
  top: 35px;
  left: 90px;
}

</style>