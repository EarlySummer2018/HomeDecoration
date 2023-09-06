import { SwiperItem, SwiperStyle } from "@/interface/swiper";
import { computed, ref, watch } from "vue";

const useSwiper = (templateStore:any) => {
  const data = templateStore.currentHanderObject
  // 轮播图公共样式
  const swiperStyle:SwiperStyle = data.options;

  const titleStartColor = ref<string>(data.options.titleBgColor)
  const titleEndColor = ref<string>(data.options.titleBgColor)

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

  watch([titleStartColor, titleEndColor],([start, end])=>{
    if (swiperStyle.titleBgType === 1) {
      swiperStyle.titleBgColor = start
    }else if (swiperStyle.titleBgType === 2) {
      swiperStyle.titleBgColor = [start, end]
    }
  })

  watch(
    () => swiperStyle.titleBgType,
    (nVal) => {
      if (nVal === 1) {
        swiperStyle.titleBgColor = titleStartColor.value
      }else{
        swiperStyle.titleBgColor = [titleStartColor.value, titleEndColor.value]
      }
  })

  return {
    swiper,
    swiperStyle,
    titleStartColor,
    titleEndColor,
    removeSwiper
  };
};

export default useSwiper;
