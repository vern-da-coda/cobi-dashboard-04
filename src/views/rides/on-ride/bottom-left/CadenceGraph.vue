<script>
import Konva from 'konva';

const colorEnabled = '#00C8E6';
const colorDisabled = '#444952';
const colorAverage = '#FFFFFF';

const stageWidth = 200;
const stageHeight = 200;

const arcOuterRadius = 64;
const arcWidth = 14;

export default {
  data() {
    return {
      currentCadenceArcRotation: -90,
      averageCadenceArcRotation: -90,
      maxCadenceCeiling: 100,
      wasMoving: true,
      stageSize: {
        width: stageWidth,
        height: stageHeight
      }
    };
  },
  props: {
    currentCadence: Number,
    maxCadence: Number,
    averageCadence: Number,
  },
  methods: {
    isMoving() {
      return this.currentCadence > 0;
    },
  },
  mounted() {

    let vm = this;

    let movingIndicationRect = new Konva.Rect({
      x: 0,
      y: 150,
      width: 90,
      height: arcWidth,
      fill: colorDisabled,
    });

    let arcGroup = new Konva.Group({
      clip: {
        x: 95,
        y: 0,
        width: stageWidth,
        height: stageHeight,
      }
    });

    let arcCurrentCadence = new Konva.Arc(
        {
          x: 95,
          y: 100,
          innerRadius: arcOuterRadius - arcWidth,
          outerRadius: arcOuterRadius,
          angle: 180,
          rotation: 90,
          fill: colorEnabled,
        }
    );

    let arcAverageCadence = new Konva.Arc(
        {
          x: 95,
          y: 100,
          innerRadius: arcOuterRadius - arcWidth,
          outerRadius: arcOuterRadius,
          angle: 5,
          fill: colorAverage,
        }
    );

    let arcBackground = new Konva.Arc(
        {
          x: 95,
          y: 100,
          innerRadius: arcOuterRadius - arcWidth,
          outerRadius: arcOuterRadius,
          angle: 180,
          rotation: -90,
          fill: colorDisabled,
        }
    );

    arcGroup.add(arcBackground);
    arcGroup.add(arcCurrentCadence);
    arcGroup.add(arcAverageCadence);

    this.$refs.layer.getNode().add(movingIndicationRect);
    this.$refs.layer.getNode().add(arcGroup);

    function tweenCurrentCadenceArc() {
      if (vm.maxCadence > vm.maxCadenceCeiling) {
        vm.maxCadenceCeiling = vm.maxCadence;
      }

      let factor = (100 / vm.maxCadenceCeiling) * vm.currentCadence;
      let rotation = Math.round((180 / 100) * factor * (-1)) + 90;

      if (vm.currentCadenceArcRotation !== rotation) {
        vm.currentCadenceArcRotation = rotation;

        let tweenSpeedArc =
            new Konva.Tween(
                {
                  node: arcCurrentCadence,
                  rotation: vm.currentCadenceArcRotation,
                  easing: Konva.Easings.EaseInOut,
                  duration: .5,
                  opacity: 100
                }
            );
        tweenSpeedArc.play();
      }
    }

    function tweenAverageCadenceArc() {
      if (vm.averageCadence !== null) {
        let factor = (100 / vm.maxCadenceCeiling) * vm.averageCadence;
        let rotation = Math.round((180 / 100) * factor) - 90;

        if (vm.averageCadenceArcRotation !== rotation) {
          vm.averageCadenceArcRotation = rotation;

          let tweenCadenceArc =
              new Konva.Tween(
                  {
                    node: arcAverageCadence,
                    rotation: vm.averageCadenceArcRotation,
                    easing: Konva.Easings.EaseInOut,
                    duration: 1,
                    opacity: 100
                  }
              );
          tweenCadenceArc.play();
        }
      }
    }

    function tweenMovingIndicator() {
      if (vm.wasMoving !== vm.isMoving()) {

        let color = colorDisabled;
        let duration = 2;
        if (vm.isMoving()) {
          color = colorEnabled;
          duration = .01;
        }

        let tweenSpeedArc =
            new Konva.Tween(
                {
                  node: movingIndicationRect,
                  easing: Konva.Easings.EaseInOut,
                  duration: duration,
                  fill: color,
                }
            );
        tweenSpeedArc.play();

        vm.wasMoving = vm.isMoving();
      }
    }

    setInterval(function () {
      tweenMovingIndicator();
      tweenCurrentCadenceArc();
      tweenAverageCadenceArc();

    }, 500);

  },
};
</script>

<template>
  <v-stage ref="stage" :config="stageSize">
    <v-layer ref="layer"/>
  </v-stage>
</template>