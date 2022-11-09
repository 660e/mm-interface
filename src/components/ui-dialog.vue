<template>
  <div v-if="command" :style="right ? style : {}" class="ui-dialog absolute-center">
    <div class="relative">
      <div v-if="text" class="title">{{ text }}</div>
      <!-- options -->
      <ui-border v-if="command === 'options'" class="w-4">
        <ui-item v-for="(o, i) in ['使用/装备', '交给', '丢弃']" v-text="o" :key="i" @click="$emit('selected', i)" class="text-center" clickable />
      </ui-border>
      <!-- confirm -->
      <ui-border v-if="command === 'confirm'" class="w-4">
        <ui-item v-for="(o, i) in ['确定', '取消']" v-text="o" :key="i" @click="$emit('selected', i)" :class="[right || 'text-center']" clickable />
      </ui-border>
      <!-- team -->
      <ui-border v-if="command === 'team'" class="w-8">
        <ui-grid :grid="[4, 2]" column>
          <ui-item v-for="a in actors[0]" v-text="a" :key="a" @click="$emit('selected', 0)" clickable />
          <div></div>
          <ui-item v-for="a in actors[1]" v-text="a" :key="a" @click="$emit('selected', 1)" clickable />
        </ui-grid>
      </ui-border>
      <!-- tank || human -->
      <ui-border v-if="command === 'tank' || command === 'human'" class="w-10">
        <ui-item v-for="a in actors[command === 'tank' ? 1 : 0]" :key="a" @click="$emit('selected')" class="flex justify-between" clickable>
          <div>{{ a }}</div>
          <div>4/10 {{ command === 'tank' ? 'SP' : 'HP' }} 1234/9999</div>
        </ui-item>
      </ui-border>
      <!-- number -->
      <ui-border v-if="command === 'number'" @click="$emit('selected')" class="w-5 text-right">
        <ui-item>0000/9999</ui-item>
        <ui-item>{{ Math.floor(Math.random() * 1234) }}G</ui-item>
      </ui-border>
    </div>
  </div>
</template>

<script>
import data from '../views/data.json';

export default {
  name: 'ui-dialog',
  emits: ['selected'],
  props: {
    command: String,
    text: String,
    right: Boolean
  },
  data() {
    return {
      actors: data.actors
    };
  },
  computed: {
    style() {
      return {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: '156px'
      };
    }
  }
};
</script>
