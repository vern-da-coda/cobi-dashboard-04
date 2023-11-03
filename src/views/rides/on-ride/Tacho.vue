<script>
import Konva from 'konva';

const width = window.innerWidth;
const height = window.innerHeight;

export default {
  data() {
    return {
      rotation: -90,
      factor: 0,
      maxSpeedCeiling: 35,
      stageSize: {
        width: width,
        height: height
      }
    };
  },
  props: {
    speed: Number,
    maxSpeed: Number
  },
  mounted() {

    let vm = this;

    let circle = new Konva.Shape({
      x: 100,
      y: 100,
      radius: 50,
      startAngle: 45,
      endAngle: 90,
      fill: '#00C8E6',
    });

    this.$refs.layer.getNode().add(circle);

    let arc = new Konva.Arc(
        {
          x: 150,
          y: 150,
          innerRadius: 120,
          outerRadius: 150,
          angle: 180,
          rotation: -90,
          fill: '#00C8E6',
        }
    );


    this.$refs.layer.getNode().add(arc);

    setInterval(function () {

      if (vm.maxSpeed > vm.maxSpeedCeiling) {
        vm.maxSpeedCeiling = vm.maxSpeed;
      }

      vm.factor = (100 / vm.maxSpeedCeiling) * vm.speed;
      vm.rotation = Math.round((180 / 100) * vm.factor) - 90;

      let tween =
          new Konva.Tween(
              {
                node: arc,
                rotation: vm.rotation,
                easing: Konva.Easings.EaseInOut,
                duration: 1,
                opacity: 100
              }
          );

      tween.play();

    }, 500);

  },
};
</script>

<template>
  <v-stage ref="stage" :config="stageSize">
    <v-layer ref="layer">
      <v-line
          :config="{
            x: 0,
            y: 60,
            points: [60, 60, 400, 0, 400, 400, 0,400],
            tension: 0.2,
            closed: true,
            fill: '#444353',
      }"/>
      <v-circle
          :config="{
            x: 150,
            y: 150,
            radius: 170,
            fill: '#ffffff',
             // stroke: '#444353',
      }"/>
      <v-circle
          :config="{
            x: 150,
            y: 150,
            radius: 100,
            fill: '#444353',
      }"/>
      <v-circle
          :config="{
            x: 150,
            y: 150,
            radius: 90,
            fill: '#ffffff',
      }"/>
    </v-layer>
  </v-stage>
</template>