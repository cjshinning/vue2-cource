import * as Types from '@/store/action-types';
import { fetchSlides } from '@/api/home';

const homeActions = {
  async [Types.SET_SLIDES]() {
    let slides = await fetchSlides();
    console.log(slides);
  }
}

export default homeActions;