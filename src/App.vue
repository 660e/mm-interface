<template>
  <div class="app">
    <router-view />
    <nav>
      <div v-for="n in nav" :key="n.label" :class="{ active: $route.path === n.path }" @click="$router.push(n)">{{ n.label }}</div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { label: '菜单', path: '/menu' },
        { label: '装备店/道具店', path: '/shop' },
        { label: '旅馆', path: '/inn' },
        { label: '酒吧', path: '/bar' },
        { label: '猎人办事处', path: '/office' },
        { label: '补给店', path: '/supply' },
        { label: '修理店', path: '/repair' },
        { label: '改造店', path: '/upgrade' },
        { label: '记录中心', path: '/save' }
      ]
    };
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  line-height: 1;
  font-style: normal;
  font-weight: normal;
  cursor: default;
  user-select: none;
  text-decoration: none;
  color: #fff;
}
.app {
  background-color: #1d1d1d;
  font-family: consolas, 'microsoft yahei';
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & > nav {
    position: absolute;
    top: 20px;
    right: 20px;
    div {
      font-size: 20px;
      cursor: pointer;
      margin-bottom: 20px;
      &:hover,
      &.active {
        color: #e05000;
      }
    }
  }
}
</style>
