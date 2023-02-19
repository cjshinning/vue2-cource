<template>
  <div class="profile">
    <van-nav-bar title="个人中心" />
    <div class="profile-info">
      <template v-if="true">
        <img src="@/assets/logo.png" alt="">
        <van-button size="small" to="/login">登录</van-button>
      </template>
      <template v-else>
        <!-- 头像上传 -->
        <img src="@/assets/logo.png" alt="">
        <span>张三</span>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.profile {
  .profile-info {
    display: flex;
    align-items: center;
    height: 150px;
    padding: 0 15px;

    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
