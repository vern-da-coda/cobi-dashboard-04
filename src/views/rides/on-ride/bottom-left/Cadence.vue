<script>
export default {
  props: {
    cadence: Number,
  },
  methods: {
    splitCadence() {
      return this.cadence.toFixed(1).split('').reverse();
    },
    firstCharacter() {
      return this.splitCadence()[3];
    },
    secondCharacter() {
      return this.splitCadence()[2];
    },
  }
};
</script>

<template>
  <div>
    <div id="cadence-first-character">{{ firstCharacter() }}</div>
    <div id="cadence-second-character">{{ secondCharacter() }}</div>
    <div id="unit">Turns</div>
  </div>
</template>

<style scoped>
#cadence-first-character, #cadence-second-character, #unit {
  display: block;
  position: absolute;
  text-align: right;
}

#cadence-first-character, #cadence-second-character {
  font-size: 70px;
  top: 20px;
}

#cadence-first-character {
  left: 0;
}

#cadence-second-character {
  left: 45px;
}

#unit {
  font-size: 15px;
  top: 35px;
  left: 90px;
}
</style>