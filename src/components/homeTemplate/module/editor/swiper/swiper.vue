<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import tabCard from "@/components/tabsCard/tabCard.vue";
import { useSwiper } from "@/store";
import errImg from "@/utils/loadErrorImg";
import type { SwiperItem, SwiperStyle } from "@/interface/swiper";
const swiperStore = useSwiper();
const swiperContent = ref<SwiperItem[]>([]);
const swiperStyle = reactive<SwiperStyle>({
  dotPosition: 'center',
  dotBgColor: 'hotPink',
  dotDefaultBgColor: '#fff',
  dotShape: 'round',
  dotSize: 10,
  autoPlay: true,
  speed: 3000,
})
onMounted(()=>{
  swiperContent.value = swiperStore.swiper
  Object.assign(swiperStyle, swiperStore.swiperStyle)
})
</script>

<template>
  <div class="swiper-content">
    <tabCard>
      <template #content>
        <div class="swiper-item" v-for="item in swiperContent" :key="item.id">
          <a-image class="img" :src="item.path" :fallback="errImg" />
          <div class="cell">
            <span class="label">轮播图标题</span>
            <a-input
              v-model:value="item.title"
              @change="swiperStore.setSwiper(swiperContent)"
              placeholder="请输入轮播图标题（为空不显示）"
            />
          </div>
        </div>
      </template>
      <template #style>
      </template>
    </tabCard>
  </div>
</template>

<style lang="scss">
.swiper-content {
  .swiper-item {
    .img {
      width: 322px;
        height: 172px;
        object-fit: cover;
    }
  }
  .cell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgba(0, 0, 0, 0.65);
    margin-bottom: 15px;
    .label {
      display: block;
      font-size: 12px;
      white-space: nowrap;
      margin-right: 20px;
    }
  }
}
</style>
