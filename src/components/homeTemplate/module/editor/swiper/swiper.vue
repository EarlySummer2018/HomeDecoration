<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import tabCard from "@/components/tabsCard/tabCard.vue";
import { useSwiper } from "@/store";
import { PlusOutlined } from '@ant-design/icons-vue';
import type { SwiperItem, SwiperStyle } from "@/interface/swiper";
import { createSwiper } from "../../content/swiper/swiper";
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

const addSwiper = () => {
  swiperContent.value.push(createSwiper())
  swiperStore.setSwiper(swiperContent.value)
}

const delSwiper = (index:number) => {
  swiperContent.value.splice(index, 1)
  swiperStore.setSwiper(swiperContent.value)
}

onMounted(()=>{
  swiperContent.value = swiperStore.swiper
  Object.assign(swiperStyle, swiperStore.swiperStyle)
})
</script>

<template>
  <div class="swiper-content">
    <tabCard c-title="" bgColor="transparent" padding="0">
      <template #content>
        <div class="swiper-item" v-for="(item, index) in swiperContent" :key="item.id">
          <p class="item-title">
            <span>轮播图{{ index + 1 }}</span>
            <a-button type="link" danger size="mini" style="padding: 0;" @click="delSwiper(index)">删除</a-button>
          </p>
          <div class="cell">
            <span class="label">轮播图标题</span>
            <a-input
              v-model:value="item.title"
              @change="swiperStore.setSwiper(swiperContent)"
              placeholder="请输入轮播图标题（为空不显示）"
            />
          </div>
          <div class="cell">
            <span class="label">图片</span>
            <a-upload
              name="swiper"
              class="swiper-uploader"
              :show-upload-list="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
              <img v-if="item.path" :src="item.path" alt="swiper" />
              <div v-else>
                <!-- <loading-outlined v-if="!item.path"></loading-outlined> -->
                <plus-outlined></plus-outlined>
              </div>
            </a-upload>
          </div>
          <div class="cell" style="margin-bottom: 0;">
            <span class="label">跳转链接</span>
            <a-button type="link" size="mini" style="padding: 0;">选择链接</a-button>
          </div>
        </div>
        <a-button class="add-btn" @click="addSwiper()">
          <plus-outlined></plus-outlined>
          <span>添加轮播图</span>
        </a-button>
      </template>
      <template #style>
      </template>
    </tabCard>
  </div>
</template>

<style lang="scss">
.swiper-content {
  .add-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-item {
    background-color: #f0f2f5;
    padding: 12px 11px;
    margin-bottom: 10px;
    border-radius: 4px;
    .item-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .img {
      width: 322px;
        height: 172px;
        object-fit: cover;
    }
    .swiper-uploader {
      width: 60px;
      height: 60px;
      border: 1px dashed #d9d9d9;
      border-radius: 2px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
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
