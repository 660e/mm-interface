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
        { label: '装备/道具店', path: '/shop/1' },
        { label: '旅馆', path: '/shop/2' },
        { label: '酒吧', path: '/shop/3' },
        { label: '猎人办事处', path: '/shop/4' },
        { label: '修理店', path: '/shop/5' },
        { label: '战斗', path: '/battle' }
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
  font-family: consolas, monaco, 'microsoft yahei';
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
