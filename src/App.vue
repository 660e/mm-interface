<template>
  <div class="app">
    <router-view />
    <nav>
      <router-link v-for="n in nav" :key="n.value" :to="{ path: n.value }">{{ n.label }}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { label: 'menu', value: '/menu' },
        { label: 'message', value: '/message' },
        { label: 'map', value: '/map' },
        { label: 'shop-1', value: '/shop-1' },
        { label: 'shop-2', value: '/shop-2' },
        { label: 'shop-3', value: '/shop-3' },
        { label: 'battle', value: '/battle' }
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
  text-decoration: none;
  cursor: default;
  user-select: none;
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
    font-size: $md;
    padding: $md;
    position: absolute;
    top: 0;
    right: 0;
    a {
      color: $blue;
      cursor: pointer;
      text-decoration: none;
      display: block;
      margin-bottom: $md;
      &:hover {
        text-decoration: underline;
      }
      &.router-link-active {
        color: $pink;
      }
    }
  }
}
</style>
