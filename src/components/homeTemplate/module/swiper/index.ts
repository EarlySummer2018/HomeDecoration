import guid from "@/utils/guid";

export interface SwiperItem {
    id: number | string,
    title: string,
    path: string,
    upload_id?: number | string,
    isNew?: boolean,
}
export const defaultSwiperItem:SwiperItem = {
    id: guid(),
    title: '新增轮播图',
    path: '',
    isNew: true
}