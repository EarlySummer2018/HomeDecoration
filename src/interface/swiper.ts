export type dp = 'flex-start' | 'center' | 'flex-end';
export type ds = 'round' | 'square' | 'rectangular';
export type tb = 'top' | 'bottom' | undefined
export type su = string | undefined
export interface SwiperItem {
    id: string,
    path: string,
    upload_id?: string | number,
    title?: su,
    titlePosition?: tb,
    link?: su,
    linkType?: su,
}
export interface SwiperStyle {
    dotPosition: dp,
    dotBgColor: string,
    dotDefaultBgColor: string,
    dotShape: ds,
    dotSize: number,
    autoPlay: boolean,
    speed: number,
}
export interface SwiperState {
    swiperStyle: SwiperStyle,
    swiper: SwiperItem[]
}