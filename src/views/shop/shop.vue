<template>
  <div class="scene">装备店/道具店</div>

  <div class="w-300 gap flex">
    <div class="col">
      <br />
      <br />
      <br />
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text hoverable>买</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text hoverable>卖</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text hoverable>离开商店</q-text></q-window>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scene-shop'
};
</script>
