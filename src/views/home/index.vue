<template>
  <div>
    <HomeHeader v-model="currentCategory"></HomeHeader>
    <!-- 列表需要用到筛选 -->
    <!-- {{ category }} -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(s, index) in slides" :key="index">
        <img :src="s.url" alt="">
      </van-swipe-item>
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
  async mounted() {
    // 页面一加载就开始获取数据
    if (this.slides.length == 0) { //如果vuex中有数据，直接拿来用
      try {
        await this[Types.SET_SLIDES]();
      } catch (e) {
        console.log(e)
      }

    }
  },
  computed: {
    ...mapState(['category', 'slides']),
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

<style lang="scss">
.my-swipe {
  height: 120px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>