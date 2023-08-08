<script setup lang="ts">
import { ref } from "vue";
import { useTemplate } from "@/store";
import errImg from "@/utils/loadErrorImg";
import type { SwiperItem, SwiperStyle } from "@/interface/swiper";
const props = defineProps<{
  swiper: SwiperItem[];
  options: any;
  id: string;
}>();
const templateStore = useTemplate();
const currentSwiper = ref<number>(0);
const swiperChange = (current: number) => {
  currentSwiper.value = current;
};
const swiperTitleStyle = (item: SwiperItem) => {
  if (item.titlePosition === "bottom") {
    return {
      top: "unset",
      bottom: 0,
      backgroundImage: `linear-gradient(to bottom, transparent, rgb(0, 0, 0))`,
    };
  } else {
    return {
      top: 0,
      bottom: "unset",
      backgroundImage: `linear-gradient(to top, transparent, rgb(0, 0, 0))`,
    };
  }
};

const setDotStyle = (index: number) => {
  const swiperStyle: SwiperStyle = props.options;
  const width =
    swiperStyle.dotShape === "rectangular"
      ? `${swiperStyle.dotSize * 2}px`
      : `${swiperStyle.dotSize}px`;
  return {
    width,
    height: swiperStyle.dotSize + "px",
    borderRadius: swiperStyle.dotShape === "round" ? "50%" : "0",
    backgroundColor:
      index === currentSwiper.value
        ? swiperStyle.dotBgColor
        : swiperStyle.dotDefaultBgColor,
  };
};
</script>

<template>
  <div
    class="swiper-box move"
    data-type="swiper"
    :id="`cx-${props.id}`"
    :class="{ active: templateStore.id === props.id }"
  >
    <a-carousel
      class="swiper"
      autoplay
      :dots="false"
      :autoplaySpeed="props.options.speed * 1000"
      :afterChange="swiperChange"
    >
      <div class="swiper-item" v-for="item in props.swiper" :key="item.id">
        <a-image class="img" :src="item.path" :fallback="errImg" />
        <div
          class="swiper-title"
          :style="swiperTitleStyle(item)"
          v-if="item.title"
        >
          {{ item.title }}
        </div>
      </div>
    </a-carousel>
    <div
      class="swiper-dot"
      :style="{ justifyContent: props.options.dotPosition }"
    >
      <i
        v-for="({ id }, index) in swiper"
        :key="id"
        class="dot-item"
        :style="setDotStyle(index)"
      ></i>
    </div>
  </div>
</template>

<style lang="scss">
.swiper-box {
  position: relative;
  overflow: hidden;
  .swiper {
    width: 375px;
    height: 200px;
    .swiper-item {
      position: relative;
      width: 375px;
      height: 200px;
      .swiper-title {
        position: absolute;
        width: 100%;
        height: 50px;
        left: 0;
        bottom: 0;
        background-image: linear-gradient(
          to bottom,
          transparent,
          rgba(0, 0, 0, 1)
        );
      }
      .img {
        width: 375px;
        height: 200px;
        object-fit: cover;
      }
    }
  }
  .swiper-dot {
    position: absolute;
    width: 100%;
    padding: 0 25px;
    left: 0;
    bottom: 10px;
    display: flex;
    align-items: center;
    .dot-item {
      width: 10px;
      height: 10px;
      background-color: #fff;
      margin-left: 5px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>
