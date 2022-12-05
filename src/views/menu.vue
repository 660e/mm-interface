<template>
  <div class="col flex" style="padding-top: 100px">
    <div class="col">
      <ui-window class="w-150">
        <ui-item>地图</ui-item>
        <ui-item>乘降</ui-item>
        <ui-item>道具</ui-item>
        <ui-item @click="scene = 4" hoverable>装备</ui-item>
        <ui-item>状态</ui-item>
        <ui-item>车库</ui-item>
        <ui-item>选项</ui-item>
      </ui-window>
    </div>
  </div>
  <!--
  <div class="col flex" style="padding-top: 100px">
    <div class="col">
      <ui-window class="w-150">
        <ui-item @click="scene = 1" hoverable>地图</ui-item>
        <ui-item>乘降</ui-item>
        <ui-item @click="scene = 3" hoverable>道具</ui-item>
        <ui-item @click="scene = 4" hoverable>装备</ui-item>
        <ui-item @click="scene = 5" hoverable>状态</ui-item>
        <ui-item @click="scene = 6" hoverable>车库</ui-item>
        <ui-item>选项</ui-item>
      </ui-window>
    </div>
    <div v-if="[3, 4, 5, 6].includes(scene)">
      <ui-window>
        <template v-if="[3].includes(scene)">
          <ui-actor @click="type = true" class="q-mb" focusable />
          <ui-actor :icon="[3, 2]" @click="type = true" class="q-mb" focusable />
        </template>
        <template v-if="[4, 5].includes(scene)">
          <ui-actor v-for="n in 3" :key="n" :icon="[1, n]" @click="type = true" class="q-mb" focusable />
        </template>
        <template v-if="[3, 4, 6].includes(scene)">
          <ui-actor v-for="n in 4" :key="n" :icon="[2, n]" :class="{ 'q-mb': n < 4 }" @click="type = false" focusable />
        </template>
        <ui-actor v-if="[6].includes(scene)" @click="type = true" class="q-mt" focusable />
      </ui-window>
    </div>
  </div>
 
  <menu-map v-if="scene === 1" />
  <menu-item v-if="scene === 3" :type="type" />
  <menu-equip v-if="scene === 4" :type="type" />
  <menu-status v-if="scene === 5" />
  <menu-assets v-if="scene === 6" :type="type" />
  -->
  <menu-actors v-if="scene === 0" class="w-250" />
</template>

<script>
export default {
  name: 'scene-menu',
  data() {
    return {
      scene: 0,
      type: true
    };
  }
};
</script>
