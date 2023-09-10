import { useTemplate } from "@/store";
import { ref, watch } from "vue";

const useSwiper = () => {
  const {currentHanderObject} = useTemplate()
  
  const {value: swiper, style, options} = currentHanderObject.data;
  
  const titleStartColor = ref<string>(style.titleBgColor)
  const titleEndColor = ref<string>(style.titleBgColor)

  /**
   * 根据索引删除轮播图
   * @param index 要移除的轮播图索引
   */
  const removeSwiper = (index:number) => {
    swiper.splice(index, 1)
  }

  watch([titleStartColor, titleEndColor],([start, end])=>{
    if (options.titleBgType === 1) {
      style.titleBgColor = start
    }else if (options.titleBgType === 2) {
      style.titleBgColor = [start, end]
    }
  })

  watch(
    () => options.titleBgType,
    (nVal) => {
      if (nVal === 1) {
        style.titleBgColor = titleStartColor.value
      }else{
        style.titleBgColor = [titleStartColor.value, titleEndColor.value]
      }
  })

  return {
    swiper,
    style,
    options,
    titleStartColor,
    titleEndColor,
    removeSwiper
  };
};

export default useSwiper;
