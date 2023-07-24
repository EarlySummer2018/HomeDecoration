import { SwiperItem, SwiperStyle, dp, ds, su, tb } from "@/interface/swiper";
import { computed } from "vue";

const useSwiper = (templateStore:any) => {
  const data = templateStore.currentHanderObject
  // 轮播图公共样式
  const swiperStyle:SwiperStyle = data.options;

  // 轮播图数据
  const swiper = computed<SwiperItem[]>({
    get() {
      return data.value
    },
    set(nVal) {
      const obj = data
      obj.value = nVal
      obj.options = swiperStyle
      templateStore.setCurrentHandlerObject(obj)
    }
  });

  /**
   * 根据索引删除轮播图
   * @param index 要移除的轮播图索引
   */
  const removeSwiper = (index:number) => {
    swiper.value.splice(index, 1)
  }

  
  /**
   * 设置某一项轮播图图片
   * @param {string} path 图片路径
   * @param {string | number} upload_id 图片上传Id
   * @param {number} index 轮播图索引
   */
  const setPath = (path: string, upload_id: string | number, index: number) => {
    swiper.value[index].path = path;
    swiper.value[index].upload_id = upload_id;
  };

  /**
   * 设置轮播图指示器位置
   * @param {dp} position 指示器位置，默认：`center`，可选：`"center" | "flex-start" | "flex-end"`
   */
  const setDotPosition = (position: dp) => {
    swiperStyle.dotPosition = position;
  };

  /**
   * 设置指示器激活颜色
   * @param {string} color 激活颜色，默认：`#FF69B4`
   */
  const setDotBgColor = (color: string) => {
    swiperStyle.dotBgColor = color;
  };

  /**
   * 设置指示器默认颜色
   * @param {string} color 默认颜色，默认：`#FFFFFF`
   */
  const setDotDefaultBgColor = (color: string) => {
    swiperStyle.dotDefaultBgColor = color;
  };

  /**
   * 设置指示器形状
   * @param {ds} shape 指示器形状，默认：`round`，可选：`"round" | "square" | "rectangular"`
   */
  const setDotShape = (shape: ds) => {
    swiperStyle.dotShape = shape;
  };

  /**
   * 设置指示器大小
   * @param {number} size 大小，默认：`10`，单位：`px`
   */
  const setDotSize = (size: number) => {
    swiperStyle.dotSize = size;
  };

  /**
   * 设置轮播图是否自动轮播
   * @param {boolean} autoPlay 是否自动轮播，默认：`true`
   */
  const setAutoPlay = (autoPlay: boolean) => {
    swiperStyle.autoPlay = autoPlay;
  };

  /**
   * 设置轮播图切换速度
   * @param {number} speed 切换速度，默认：`3`，单位：`秒`
   */
  const setSpeed = (speed: number) => {
    swiperStyle.speed = speed;
  };

  /**
   * 设置每张轮播图标题
   * @param {string} title 轮播图标题
   * @param {number} index 要设置的轮播图索引
   */
  const setTitle = (title: su, index: number) => {
    swiper.value[index].title = title;
  };

  /**
   * 设置每张轮播图标题的位置
   * @param {tb} position 标题位置，默认：`bottom`
   * @param {number} index 要设置的轮播图索引
   */
  const setTitlePosition = (position: tb, index: number) => {
    swiper.value[index].titlePosition = position;
  };

  /**
   * 设置每张轮播图标题的跳转链接
   * @param {su} link 跳转链接
   * @param {number} index 要设置的轮播图索引
   */
  const setLink = (link: su, index: number) => {
    swiper.value[index].link = link;
  };

  /**
   * 设置每张轮播图标题的跳转类型
   * @param {su} linkType 跳转类型
   * @param {number} index 要设置的轮播图索引
   */
  const setLinkType = (linkType: su, index: number) => {
    swiper.value[index].linkType = linkType;
  };

  return {
    swiper,
    swiperStyle,

    setPath,
    setDotPosition,
    setDotBgColor,
    setDotDefaultBgColor,
    setDotShape,
    setDotSize,
    setAutoPlay,
    setSpeed,
    setTitle,
    setTitlePosition,
    setLink,
    setLinkType,
    removeSwiper
  };
};

export default useSwiper;
