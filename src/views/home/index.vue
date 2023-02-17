<template>
  <div>
    <HomeHeader v-model="currentCategory"></HomeHeader>
    <!-- 列表需要用到筛选 -->
    <!-- {{ category }} -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import HomeHeader from './home-header.vue';
import { createNamespacedHelpers } from 'vuex';
import * as Types from '@/store/action-types';
// 这个拿到的都是home下的模块
let { mapState: mapState, mapMutations, mapActions } = createNamespacedHelpers('home');

export default {
  methods: {
    ...mapMutations([Types.SET_CATEGORY]),
    ...mapActions([Types.SET_SLIDES])
  },
  mounted() {
    // 页面一加载就开始获取数据
    this[Types.SET_SLIDES]();
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