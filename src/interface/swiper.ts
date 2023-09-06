export type dp = "flex-start" | "center" | "flex-end";
export type ds = "round" | "square" | "rectangular";
export type tb = "top" | "bottom";
export interface SwiperItem {
  id: string;
  path: string;
  upload_id?: string | number;
  title?: string | undefined;
  titlePosition?: tb;
  link?: InsideLinks;
}
export interface SwiperStyle {
  dotPosition: dp;
  dotBgColor: string;
  dotDefaultBgColor: string;
  dotShape: ds;
  dotSize: number;
  autoPlay: boolean;
  speed: number;
  titleColor: string,
  titleBgType: number;
  titleBgColor: string | string[];
  gradientDirectional: "top" | "bottom" | "left" | "right";
}
export interface SwiperState {
  swiperStyle: SwiperStyle;
  swiper: SwiperItem[];
}
