<script>
export default {
  props: {
    currentSpeed: Number,
    maxSpeed: Number,
    averageSpeed: Number,
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
    <div id="current-speed-first-character">{{ firstCharacter() }}</div>
    <div id="current-speed-second-character">{{ secondCharacter() }}</div>
    <div id="comma">.</div>
    <div id="fraction-character">{{ fractionCharacter() }}</div>
    <div id="unit">km/h</div>
  </div>
</template>

<style scoped>
#current-speed-first-character, #current-speed-second-character, #comma, #fraction-character, #unit {
  display: block;
  position: absolute;
}

#current-speed-first-character, #current-speed-second-character, #comma {
  font-size: 70px;
  top: 20px;
}

#current-speed-first-character {
  left: 0;
}

#current-speed-second-character {
  left: 40px;
}

#fraction-character {
  font-size: 40px;
  top: 10px;
  left: 85px;
}

#comma {
  left: 82px;
}

#unit {
  font-size: 15px;
  top: 35px;
  left: 100px;
}
</style>