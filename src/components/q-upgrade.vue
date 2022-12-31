<template>
  <template v-for="n in 3" :key="n">
    <q-text v-if="td[n - 1]" hoverable icon>
      <span>{{ td[n - 1][0] }}</span>
      <div class="q-upgrade">
        <div>
          <b v-for="b in td[n - 1][1]" :key="b" :class="{ active: b < td[n - 1][2] + 1 }"></b>
        </div>
      </div>
      <span class="text-positive">(+{{ $r(1000, 2000) }}){{ $r(2000, 3000) }}</span>
    </q-text>
    <br v-else />
  </template>
  <q-text between icon>
    <span>{{ $d.dicts[3][8] }}</span>
    <span class="text-negative">(+{{ $r(10, 20) }}.00t){{ $r(20, 50) }}.00t</span>
  </q-text>
  <q-text between icon>
    <span>费用</span>
    <span>{{ $r(1000000, 5000000) }}G</span>
  </q-text>
</template>

<script>
export default {
  name: 'q-upgrade',
  props: {
    td: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.q-upgrade {
  flex: 1;
  padding-left: $text * 2;
  display: flex;
  & > div {
    width: 96px * 2;
    display: flex;
    align-items: center;
    & > b {
      flex: 1;
      box-sizing: border-box;
      border: 1px $dark solid;
      height: $padding;
      margin-right: 1px;
      &.active {
        background-color: $positive;
      }
    }
  }
}
</style>
