import * as Types from '@/store/action-types';
import { toLogin, validate } from '@/api/user';

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
    } catch (e) {
      dispatch(Types.SET_USER, { userInfo: {}, has: false });
      return false;
    }

  }
}

export default userActions;