<script>
export default {
  props: {
    maxCadence: Number,
    averageCadence: Number,
    currentCadence: Number,
  },
  methods: {
    splitCadence() {
      return this.currentCadence.toFixed(1).split('').reverse();
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
    <div id="average-cadence">{{ averageCadence }}
      <span id="average-cadence-unit">Ø</span>
    </div>
    <div id="max-cadence">{{ maxCadence }}</div>
    <div id="current-cadence">
      <div id="current-cadence-first-character">{{ firstCharacter() }}</div>
      <div id="current-cadence-second-character">{{ secondCharacter() }}</div>
      <div id="current-cadence-unit">cadence</div>
    </div>
  </div>
</template>

<style scoped>
#max-cadence {
  font-size: 15px;
  top: 5px;
  left: 75px;
}

#average-cadence {
  font-size: 15px;
  top: 99px;
  left: 64px;
}

#max-cadence, #average-cadence-unit {
  color: #00C8E6;
}

#current-cadence {
  top: 46px;
  left: 54px;
}

#current-cadence, #current-cadence div, #max-cadence, #average-cadence {
  display: block;
  position: absolute;
  text-align: right;
}

#current-cadence-first-character, #current-cadence-second-character {
  font-size: 65px;
  top: 20px;
}

#current-cadence-first-character {
  left: 0;
}

#current-cadence-second-character {
  left: 40px;
}

#current-cadence-unit {
  font-size: 11px;
  top: 34px;
  left: -42px;
}
</style>