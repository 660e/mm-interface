<template>
  <div v-if="command" class="absolute-center">
    <!-- options -->
    <ui-border v-if="command === 'options'" class="w-4">
      <ui-item
        v-for="(o, i) in [command === 'options' ? '使用' : '装备', '交给', '丢弃']"
        v-text="o"
        :key="i"
        @click="$emit('selected', i)"
        class="text-center"
        clickable
      />
    </ui-border>
    <!-- confirm -->
    <ui-border v-if="command === 'confirm'" class="w-4">
      <ui-item v-for="(o, i) in ['是', '否']" v-text="o" :key="i" @click="$emit('selected', i)" class="text-center" clickable />
    </ui-border>
    <!-- team -->
    <ui-border v-if="command === 'team'" class="w-8">
      <ui-grid :grid="[4, 2]" column>
        <ui-item v-for="a in actors[0]" v-text="a" :key="a" @click="$emit('selected', 0)" clickable />
        <div></div>
        <ui-item v-for="a in actors[1]" v-text="a" :key="a" @click="$emit('selected', 1)" clickable />
      </ui-grid>
    </ui-border>
    <!-- get-on/off -->
    <ui-border v-if="command === 'get-on/off'" class="w-8">
      <ui-grid :grid="[3, 2]" column>
        <ui-item v-for="c in ['全员上车', '全员下车', '牵引/脱钩']" v-text="c" :key="c" @click="$emit('selected')" clickable />
        <ui-item v-for="a in actors[0]" v-text="a" :key="a" @click="$emit('selected')" clickable />
      </ui-grid>
    </ui-border>
    <!-- tank || human -->
    <ui-border v-if="command === 'tank' || command === 'human'" class="w-10">
      <ui-item v-for="a in actors[command === 'tank' ? 1 : 0]" :key="a" @click="$emit('selected')" class="flex justify-between" clickable>
        <div>{{ a }}</div>
        <div>{{ command === 'tank' ? 'SP' : 'HP' }} 1234/9999</div>
      </ui-item>
    </ui-border>
    <!-- navigate -->
    <ui-border v-if="command === 'navigate'" class="w-12">
      <ui-grid :grid="[5, 3]">
        <ui-item v-for="n in 15" v-text="`城镇-${n}`" :key="n" @click="$emit('selected')" clickable />
      </ui-grid>
    </ui-border>
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
