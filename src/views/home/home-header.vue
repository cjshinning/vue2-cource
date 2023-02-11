<template>
  <div class="wrapper">
    <div class="home-header">
      <img src="@/assets/logo.png" alt="">
      <!-- 组件通信 -->
      <van-dropdown-menu>
        <van-dropdown-item :value="value" @change="change" :options="categories" />
      </van-dropdown-menu>
    </div>
  </div>
</template>

<script>
// 单项数据量 父->子
export default {
  data() {
    return {
      categories: [
        { text: '全部课程', value: -1 },
        { text: 'node课程', value: 0 },
        { text: 'react课程', value: 1 },
        { text: 'vue课程', value: 2 },
      ]
    }
  },
  props: {
    value: Number
  },
  methods: {
    change(newValue) {
      this.$emit('input', newValue);
    }
  },
}
</script>

<style lang="scss">
.wrapper {
  padding-top: 48px;
}

.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 48px;
  background: $background;
  padding: 0 20px;


  img {
    width: 30px;
    height: 30px;
  }
}
</style>