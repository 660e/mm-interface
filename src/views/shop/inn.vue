<template>
  <div class="scene">旅馆</div>

  <div class="w-300 gap flex">
    <div class="col">
      <br />
      <br />
      <br />
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text hoverable>住宿</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text>离开旅馆</q-text></q-window>
    </div>
  </div>

  <div class="w-500 gap"></div>

  <menu-actor />
</template>

<script>
export default {
  name: 'scene-inn'
};
</script>
