import store from '@/store'
import * as Types from '@/store/action-types';

export default {
  // 此字段只是给自己看的，没有任何实际意义
  'clear_token': (to, from, next) => {
    // whiteList
    store.commit(Types.CLEAR_TOKEN);  //清空token
    next()
  },

}