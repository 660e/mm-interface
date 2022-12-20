<template>
  <div class="scene">旅馆</div>

  <div class="w-300 gap flex">
    <div class="col">
      <br />
      <br />
      <br />
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense>
        <q-text @click="content = ['住宿', ['金额：150G'], ['是', '否']]" hoverable>住宿</q-text>
      </q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text hoverable>离开旅馆</q-text></q-window>
    </div>
  </div>

  <div class="w-500 gap"></div>

  <menu-actor />
  <q-popup :content="content" @selected="content = []" />
</template>

<script>
export default {
  name: 'scene-inn',
  data() {
    return {
      content: []
    };
  }
};
</script>
