<template>
  <div class="scene">记录中心</div>
  <div class="w-300 gap"></div>
  <div class="w-500">
    <br />
    <br />
    <q-window :border="[1, 1, 1, 1]" class="hoverable">
      <h1>1</h1>
      <section>
        <div>2022/12/24 23:59</div>
        <div>罪恶郊野</div>
      </section>
      <section>
        <div><q-avatar v-for="n in 3" :key="n" :icon="[n - 1, 0]" /></div>
        <div><q-avatar v-for="n in 4" :key="n" :icon="[n - 1, 1]" /></div>
      </section>
    </q-window>
  </div>
</template>

<script>
export default {
  name: 'scene-save'
};
</script>

<style lang="scss" scoped>
.q-window {
  padding: 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 30px;
    position: absolute;
  }
  section:last-child > div {
    display: flex;
    justify-content: flex-end;
    .q-avatar {
      margin-left: $text;
    }
  }
}
</style>
