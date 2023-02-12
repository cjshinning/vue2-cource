<template>
  <div>
    <HomeHeader v-model="currentCategory"></HomeHeader>
    <!-- 列表需要用到筛选 -->
    {{ category }}
  </div>
</template>

<script>
import HomeHeader from './home-header.vue';
import { createNamespacedHelpers } from 'vuex';
import * as Types from '@/store/action-types';
// 这个拿到的都是home下的模块
let { mapState, mapMutations } = createNamespacedHelpers('home');

export default {
  methods: {
    ...mapMutations([Types.SET_CATEGORY])
  },
  computed: {
    ...mapState(['category']),
    currentCategory: {
      get() { //取值走他
        return this.category;
      },
      set(value) {  //修改状态走这里，默认会调用mutation更改状态
        this[Types.SET_CATEGORY](value);
      }
    }
  },
  data() {
    return {
      value: -1
    }
  },
  components: {
    HomeHeader
  }
}
</script>

<!-- [vuex] unknown local mutation type: home/SET_CATEGORY, global type: home/home/SET_CATEGORY -->

<!-- [vuex] unknown local mutation type: SET_CATEGORY, global type: home/SET_CATEGORY -->