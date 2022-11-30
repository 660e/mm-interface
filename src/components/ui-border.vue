<template>
  <div class="ui-border">
    <div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-border'
};
</script>

<style lang="scss" scoped>
.ui-border {
  border: 2px solid;
  border-color: $shade $shade $shade $shade;
  box-sizing: border-box;
  display: flex;
  position: relative;
  &::before,
  &::after {
    content: '';
    background-image: url('@/assets/rivet.png');
    width: 8px;
    height: 8px;
    position: absolute;
    top: 0;
    z-index: 10;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
  & > div {
    flex: 1;
    border: 8px $border solid;
    display: flex;
    position: relative;
    &::before,
    &::after {
      content: '';
      background-image: url('@/assets/rivet.png');
      width: 8px;
      height: 8px;
      position: absolute;
      bottom: -8px;
      z-index: 10;
    }
    &::before {
      left: -8px;
    }
    &::after {
      right: -8px;
    }
    & > div {
      flex: 1;
      border: 2px solid;
      border-color: $shade $shade $shade $shade;
      background-color: $bg;
      padding: $md;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
