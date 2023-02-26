import store from '@/store'
import * as Types from '@/store/action-types';

export default {
  // 此字段只是给自己看的，没有任何实际意义
  'clear_token': (to, from, next) => {
    // whiteList
    store.commit(Types.CLEAR_TOKEN);  //清空token
    next()
  },
  'login_permission': async (to, from, next) => {
    let needLogin = to.matched.some(item => item.meta.needLogin);

    // 如果vuex中有值，我就认为你当前登录过
    if (!store.state.user.hasPermission) {  //用户刷新token在但是vuex中的数据丢失了
      // 返回了一个isLogin字段表示用户是否登录过了
      let isLogin = await store.dispatch(`user/${Types.VALIDATE}`);

      if (needLogin) {  //需要登录
        if (!isLogin) {
          next('/login'); //需求登录但是没登录
        } else {
          next(); // 需要登录 也登录了
        }
      } else {  //不需要登录
        if (to.name == 'login') { //访问的是登录页面
          if (!isLogin) {
            next();
          } else {
            next('/profile');
          }
        } else {
          next();
        }
      }
    } else {
      if (to.name == 'login') {
        next('/profile');
      } else {
        next();
      }
    }

    next();
  },
  'menu-permission': async (to, from, next) => {
    // 这里需要对权限进行处理 动态路由添加

    if (store.state.user.hasPermission) { //要求用户登录，才能去拿菜单
      if (!store.state.user.menuPermission) { //没菜单权限才需要处理
        await store.dispatch(`user/${Types.ADD_ROUTE}`);
        next({ ...to, replace: true }); //页面重新跳转，组件也ok了
      } else {
        next();
      }
    } else {
      next();
    }

  }
}