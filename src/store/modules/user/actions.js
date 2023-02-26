import * as Types from '@/store/action-types';
import { toLogin, validate } from '@/api/user';
import per from '@/router/permission';
import router from '@/router';
const filterRouter = (authList) => {
  authList = authList.map(item => item.auth);

  function filter(per) {  //拿每个路由看看在不在权限列表中
    let result = per.filter(route => {
      if (authList.includes(route.meta.auth)) {
        if (route.children) {
          route.children = filter(route.children);
        }
        return route;
      }
    })
    return result;
  }

  return filter(per);
}
const userActions = {
  async [Types.SET_USER]({ commit }, { userInfo, has }) {
    commit(Types.SET_USER, userInfo);
    commit(Types.SET_PERMISSION, has);
  },
  async [Types.SET_LOGIN]({ commit, dispatch }, payload) {
    let userInfo = await toLogin(payload);
    dispatch(Types.SET_USER, { userInfo, has: true });
  },
  async [Types.VALIDATE]({ commit, dispatch }, payload) {
    // 此时需要先看一下用户是否登录过
    if (!localStorage.getItem('token')) return false;
    // axios的请求中曾token，传递到后端，让他验证
    try {
      let userInfo = await validate();  //校验是否登陆过
      dispatch(Types.SET_USER, { userInfo, has: true });
      return true;
    } catch (e) {
      dispatch(Types.SET_USER, { userInfo: {}, has: false });
      return false;
    }

  },
  async [Types.ADD_ROUTE]({ commit, dispatch, state }, payload) {
    // 添加路由的逻辑
    let authList = state.authList;
    let routes = filterRouter(authList);
    console.log(router)
    let route = router.options.routes.find(item => item.path == '/profile');

    route.children = routes;
    console.log(route)
    router.addRoutes([route]); //
    commit(Types.SET_MENU_PERMISSION, true);
  },
}

export default userActions;