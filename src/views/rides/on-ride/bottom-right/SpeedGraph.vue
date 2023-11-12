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
      currentSpeedArcRotation: -90,
      averageSpeedArcRotation: -90,
      maxSpeedCeiling: 35,
      wasMoving: true,
      stageSize: {
        width: stageWidth,
        height: stageHeight
      }
    };
  },
  props: {
    currentSpeed: Number,
    maxSpeed: Number,
    averageSpeed: Number,
  },
  methods: {
    isMoving() {
      return this.currentSpeed > 0;
    },
  },
  mounted() {

    let vm = this;

    let movingIndicationRect = new Konva.Rect({
      x: 80,
      y: 150,
      width: 100,
      height: arcWidth,
      fill: colorDisabled,
    });

    let arcGroup = new Konva.Group({
      clip: {
        x: 0,
        y: 0,
        width: 75,
        height: stageHeight,
      }
    });

    let arcCurrentSpeed = new Konva.Arc(
        {
          x: 75,
          y: 100,
          innerRadius: arcOuterRadius - arcWidth,
          outerRadius: arcOuterRadius,
          angle: 180,
          rotation: -90,
          fill: colorEnabled,
        }
    );

    let arcAverageSpeed = new Konva.Arc(
        {
          x: 75,
          y: 100,
          innerRadius: arcOuterRadius - arcWidth,
          outerRadius: arcOuterRadius,
          angle: 5,
          fill: colorAverage,
        }
    );

    let arcBackground = new Konva.Arc(
        {
          x: 75,
          y: 100,
          innerRadius: arcOuterRadius - arcWidth,
          outerRadius: arcOuterRadius,
          angle: 180,
          rotation: 90,
          fill: colorDisabled,
        }
    );

    arcGroup.add(arcBackground);
    arcGroup.add(arcCurrentSpeed);
    arcGroup.add(arcAverageSpeed);

    this.$refs.layer.getNode().add(movingIndicationRect);
    this.$refs.layer.getNode().add(arcGroup);

    function tweenCurrentSpeedArc() {
      if (vm.maxSpeed > vm.maxSpeedCeiling) {
        vm.maxSpeedCeiling = vm.maxSpeed;
      }

      let factor = (100 / vm.maxSpeedCeiling) * vm.currentSpeed;
      let rotation = Math.round((180 / 100) * factor) - 90;

      if (vm.currentSpeedArcRotation !== rotation) {
        vm.currentSpeedArcRotation = rotation;

        let tweenSpeedArc =
            new Konva.Tween(
                {
                  node: arcCurrentSpeed,
                  rotation: vm.currentSpeedArcRotation,
                  easing: Konva.Easings.EaseInOut,
                  duration: .5,
                  opacity: 100
                }
            );
        tweenSpeedArc.play();
      }
    }

    function tweenAverageSpeedArc() {
      if (vm.averageSpeed !== null) {
        let factor = (100 / vm.maxSpeedCeiling) * vm.averageSpeed;
        let rotation = Math.round((180 / 100) * factor) + 90;

        if (vm.averageSpeedArcRotation !== rotation) {
          vm.averageSpeedArcRotation = rotation;

          let tweenSpeedArc =
              new Konva.Tween(
                  {
                    node: arcAverageSpeed,
                    rotation: vm.averageSpeedArcRotation,
                    easing: Konva.Easings.EaseInOut,
                    duration: 1,
                    opacity: 100
                  }
              );
          tweenSpeedArc.play();
        }
      }
    }

    function tweenMovingIndicator() {
      if (vm.wasMoving !== vm.isMoving()) {

        let color = colorDisabled;
        let duration = 2;
        if (vm.isMoving()) {
          color = colorEnabled;
          duration = .1;
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
      tweenCurrentSpeedArc();
      tweenAverageSpeedArc();

    }, 500);

  },
};
</script>

<template>
  <v-stage ref="stage" :config="stageSize">
    <v-layer ref="layer"/>
  </v-stage>
</template>