import type { SwiperItem } from "@/interface/swiper";
import guid from "@/utils/guid";

export const defaultSwiperItem:SwiperItem = {
    id: guid(),
    path: '',
    title: '',
    titlePosition: 'bottom',
    link: '',
    linkType: ''
}
export const createSwiper = ():SwiperItem => {
    return JSON.parse(JSON.stringify(defaultSwiperItem))
}