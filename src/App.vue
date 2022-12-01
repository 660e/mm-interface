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
    a {
      font-size: 20px;
      display: block;
      cursor: pointer;
      margin-bottom: 20px;
      &:hover,
      &.router-link-active {
        color: #f00;
      }
    }
  }
}
</style>
