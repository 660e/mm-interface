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
      nav: []
    };
  }
};
</script>

<style lang="scss"></style>
