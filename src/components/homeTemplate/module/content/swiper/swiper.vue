<script setup lang="ts">
import { ref } from "vue";
import { useTemplate, useSwiper } from '@/store'
import errImg from "@/utils/loadErrorImg";
import type { SwiperItem } from "@/interface/swiper";
const props = defineProps<{swiper: SwiperItem[],type: string, id: string}>()
const templateStore = useTemplate()
const swiperStore = useSwiper()
const currentSwiper = ref<number>(0)
const swiperChange = (current: number) => {
  currentSwiper.value = current
};
</script>

<template>
  <div class="swiper-box move" :data-type="props.type" :data-id="props.id" :class="{ active: templateStore.id === props.id }">
    <a-carousel :dots="false" autoplay class="swiper" :afterChange="swiperChange">
      <div class="swiper-item" v-for="item in props.swiper" :key="item.id">
        <a-image class="img" :src="item.path" :fallback="errImg" />
        <div class="swiper-title" v-if="item.title">{{ item.title }}</div>
      </div>
    </a-carousel>
    <div class="swiper-dot" :style="{justifyContent: swiperStore.dotPosition}">
      <i 
        v-for="({ id }, index) in swiper" 
        :key="id" 
        class="dot-item"
        :style="{backgroundColor: index === currentSwiper?swiperStore.dotBgColor:swiperStore.dotDefaultBgColor}"
        ></i>
    </div>
    <div class="del-btn" @click="templateStore.deleteModule(props.id)">删除</div>
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
        background-image: linear-gradient(to bottom, transparent, rgba(0,0,0,1));
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
        border-radius: 50%;
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
