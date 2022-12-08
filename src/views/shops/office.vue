<template>
  <ui-window class="w-530 q-gap-x">
    <div class="pad-26"></div>
    <template v-if="command === 'info'">
      <ui-item>通缉令</ui-item>
      <ui-thead :th="['名字', '赏金']" />
      <div class="line-9">
        <ui-item v-for="w in wanted" :key="w" between hoverable icon>
          <span>{{ w }}</span>
          <span>{{ $r.integer(1000, 200000) }}</span>
        </ui-item>
      </div>
      <ui-thead :th="['详细资料']" />
      <ui-grid :grid="[1, 2]">
        <ui-item between icon><span>难度</span><span>简单</span></ui-item>
      </ui-grid>
      <ui-item>Lorem ipsum dolor, sit amet.</ui-item>
      <ui-item>Expedita, dignissimos accusantium ullam soluta!</ui-item>
      <ui-item>Mollitia placeat debitis, dolor suscipit.</ui-item>
    </template>
    <template v-if="command === 'reward'">
      <ui-item>领取赏金</ui-item>
      <ui-thead :th="['信物', '赏金']" />
      <div class="line-9">
        <ui-item between icon hoverable>
          <span>猴子的指甲泥</span>
          <span>{{ $r.integer(1000, 200000) }}</span>
        </ui-item>
        <ui-item between icon hoverable>
          <span>蛙人的脚蹼</span>
          <span>{{ $r.integer(1000, 200000) }}</span>
        </ui-item>
      </div>
    </template>
    <template v-if="command === 'task'">
      <ui-item>委托任务</ui-item>
      <ui-thead :th="['名称']" />
      <ui-item hoverable>Lorem, ipsum, dolor.</ui-item>
      <ui-item hoverable>Reiciendis, natus, architecto.</ui-item>
      <ui-item hoverable>Exercitationem, quia, voluptas.</ui-item>
    </template>
  </ui-window>
</template>

<script>
import data from '@/data.json';
import mockjs from 'mockjs';

export default {
  name: 'shop-office',
  props: {
    command: String
  },
  data() {
    return {
      $r: mockjs.Random,
      wanted: data.wanted
    };
  }
};
</script>
