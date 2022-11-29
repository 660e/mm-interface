<template>
  <div :style="style"></div>
</template>

<script>
export default {
  name: 'ui-icon',
  props: {
    type: {
      type: Array,
      default: () => [32, 0, 0]
    }
  },
  computed: {
    style() {
      let image;
      switch (this.type[0]) {
        case 16:
          image = require('../assets/icons.png');
          break;
        case 32:
          image = require('../assets/faces.png');
          break;
      }
      return {
        backgroundImage: `url(${image})`,
        backgroundPositionX: `-${this.type[2] * this.type[0]}px`,
        backgroundPositionY: `-${this.type[1] * this.type[0]}px`,
        width: `${this.type[0]}px`,
        height: `${this.type[0]}px`
      };
    }
  }
};
</script>
