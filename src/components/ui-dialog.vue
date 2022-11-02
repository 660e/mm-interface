<template>
  <div v-if="command" class="absolute-center">
    <div :class="[`w-${command === 'options' || command === 'confirm' ? 5 : 10}`]">
      <ui-border v-if="command === 'team'">
        <ui-grid :grid="[4, 2]" column>
          <ui-item v-for="a in actors[0]" v-text="a" :key="a" @click="$emit('selected', 0)" clickable />
          <div></div>
          <ui-item v-for="a in actors[1]" v-text="a" :key="a" @click="$emit('selected', 1)" clickable />
        </ui-grid>
      </ui-border>
      <ui-border v-if="command === 'options'">
        <ui-item
          v-for="(o, i) in [command === 'options' ? '使用' : '装备', '交给', '丢弃']"
          v-text="o"
          :key="i"
          @click="$emit('selected', i)"
          class="text-center"
          clickable
        />
      </ui-border>
      <ui-border v-if="command === 'tank' || command === 'human'">
        <ui-item v-for="a in actors[command === 'tank' ? 1 : 0]" :key="a" @click="$emit('selected')" class="flex justify-between" clickable>
          <div>{{ a }}</div>
          <div>{{ command === 'tank' ? 'SP' : 'HP' }} 1234/9999</div>
        </ui-item>
      </ui-border>
      <ui-border v-if="command === 'confirm'">
        <ui-item v-for="(o, i) in ['是', '否']" v-text="o" :key="i" @click="$emit('selected', i)" class="text-center" clickable />
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
    command: String
  },
  data() {
    return {
      actors: data.actors
    };
  }
};
</script>
