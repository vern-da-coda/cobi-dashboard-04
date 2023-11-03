<script>
import Konva from 'konva';

const width = window.innerWidth;
const height = window.innerHeight;

export default {
  data() {
    return {
      arc: null,
      stageSize: {
        width: width,
        height: height
      }
    };
  },
  props: {
    speed: Number
  },
  mounted() {
    let arc = new Konva.Arc(
        {
          x: 60,
          y: 60,
          innerRadius: 40,
          outerRadius: 70,
          angle: 60,
          rotation: 0,
          fill: '#00C8E6',
        }
    );

    this.$refs.layer.getNode().add(arc);

    setInterval(function () {
      let tween =
          new Konva.Tween(
              {
                node: arc,
                rotation: Math.random()*100,
                easing: Konva.Easings.BounceEaseOut,
                duration: 0.5,
                opacity: 100
              }
          );

      tween.play();

    }, 1000);

  },
};
</script>

<template>
  <v-stage ref="stage" :config="stageSize">
    <v-layer ref="layer"></v-layer>
  </v-stage>
</template>