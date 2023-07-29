import type { SwiperItem } from "@/interface/swiper";
import deepClone from "@/utils/deepClone";
import guid from "@/utils/guid";

export const defaultSwiperItem:SwiperItem = {
    id: guid(),
    path: '',
    title: '',
    titlePosition: 'bottom',
}
export const createSwiper = ():SwiperItem => {
    return {...deepClone(defaultSwiperItem), id: guid()}
}