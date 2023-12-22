import mitt from "mitt";
import type Swiper from "swiper";

type Events = {
  slideChange: {
    listId: string;
    swiper: Swiper;
  };
};

const bus = mitt<Events>();

export { bus };
