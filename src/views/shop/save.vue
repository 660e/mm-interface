<template>
  <div class="scene">记录中心</div>
  <div class="w-250 gap"></div>
  <div class="col gap flex column">
    <div class="col"></div>
    <q-window v-for="n in 4" :key="n" :border="[1, 1, 1, 1]" class="hoverable">
      <h1>{{ n }}</h1>
      <section>
        <div>2022-12-24 23:59:59</div>
        <div>罪恶郊野</div>
      </section>
      <section>
        <div><q-avatar v-for="n in 3" :key="n" :icon="[n - 1, 0]" /></div>
        <div>
          <q-avatar v-for="n in 4" :key="n" :icon="[n - 1, 1]" />
          <q-avatar v-for="n in 4" :key="n" :icon="[n - 1, 1]" />
        </div>
      </section>
    </q-window>
    <div class="col"></div>
  </div>
  <div class="w-250"></div>
</template>

<script>
export default {
  name: 'scene-save'
};
</script>

<style lang="scss" scoped>
.q-window {
  padding: $text;
  margin: $bit * 2 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  h1 {
    color: rgba(255, 255, 255, 0.2);
    font-size: 100px;
    font-style: italic;
    position: absolute;
    top: 0;
    left: $text;
    z-index: 1;
  }
  section {
    &:nth-child(2) > div {
      &:first-child {
        padding-bottom: $padding;
        padding-left: $text * 2;
      }
      &:last-child {
        padding-left: $text * 2;
      }
    }
    &:nth-child(3) > div {
      padding-bottom: $padding;
      display: flex;
      justify-content: flex-end;
      &:last-child {
        padding-bottom: 0;
      }
      .q-avatar {
        margin-left: $padding;
      }
    }
  }
}
</style>
