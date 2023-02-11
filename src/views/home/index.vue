<template>
  <div>
    <HomeHeader v-model="value"></HomeHeader>
    <!-- 列表需要用到筛选 -->
    {{ value }}
  </div>
</template>

<script>
import HomeHeader from './home-header.vue';
export default {
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