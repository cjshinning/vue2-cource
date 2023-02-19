import * as Types from '@/store/action-types';
import { fetchSlides } from '@/api/home';

const homeActions = {
  async [Types.SET_SLIDES]({ commit }) {
    let slides = await fetchSlides();
    commit(Types.SET_SLIDES, slides); //交给mutation去更改状态

    console.log(slides);
  }
}

export default homeActions;