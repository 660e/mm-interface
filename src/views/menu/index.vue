<template>
  <div style="width: 250px" class="flex">
    <div style="width: 150px">
      <br />
      <br />
      <br />
      <q-window :border="[1, 1, 1, 0]" dense><q-text hoverable>道具</q-text></q-window>
    </div>
    <div></div>
  </div>
  <q-window style="width: 500px" class="gap-x">2</q-window>
  <q-window style="width: 250px">3</q-window>
</template>

<script>
export default {
  name: 'scene-menu'
};
</script>
