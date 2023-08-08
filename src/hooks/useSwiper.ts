import { SwiperItem, SwiperStyle } from "@/interface/swiper";
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


  return {
    swiper,
    swiperStyle,
    removeSwiper
  };
};

export default useSwiper;
