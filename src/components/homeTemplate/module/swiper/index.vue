<script setup lang="ts">
import { onMounted, ref } from "vue";
import { type SwiperItem, defaultSwiperItem } from "./index";
import errImg from "@/utils/loadErrorImg";
const swiper = ref<SwiperItem[]>([]);
onMounted(() => {
  swiper.value.push(defaultSwiperItem);
  swiper.value.push(defaultSwiperItem);
});
const dotPosition = ref<string>('center')
const dotBgColor = ref<string>('hotPink')
const currentSwiper = ref<number>(0)
const swiperChange = (current: number) => {
  currentSwiper.value = current
};
</script>

<template>
  <div class="swiper-box">
    <a-carousel :dots="false" autoplay class="swiper" :afterChange="swiperChange">
      <div class="swiper-item" v-for="item in swiper" :key="item.id">
        <a-image class="img" :src="item.path" :fallback="errImg" />
      </div>
    </a-carousel>
    <div class="swiper-dot">
      <i v-for="({ id }, index) in swiper" :key="id" :class="['dot-item', {active: index === currentSwiper}]"></i>
    </div>
  </div>
</template>

<style lang="scss">
.swiper-box {
  position: relative;
  .swiper {
    width: 375px;
    height: 200px;
    .swiper-item {
      position: relative;
      width: 375px;
      height: 200px;
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
    justify-content: v-bind('dotPosition');
    .dot-item {
        border-radius: 50%;
        width: 10px;
        height: 10px;
        background-color: #fff;
        margin-left: 5px;
        &.active {
            background-color: v-bind('dotBgColor');
        }
        &:first-child {
            margin-left: 0;
        }
    }
  }
}
</style>
