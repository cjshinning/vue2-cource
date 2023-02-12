import * as Types from '@/store/action-types';

const homeMutations = {
  [Types.SET_CATEGORY](state, payload) {  //修改分类
    console.log(state)
    state.category = payload;
  }
}

export default homeMutations;