<script lang="ts" setup>
import { ref } from "vue";
import draggable from "vuedraggable";
import { PlusOutlined } from "@ant-design/icons-vue";
import tabCard from "@/components/tabsCard/tabCard.vue";
import SelectLinkModel from "@/components/SelectLinkModel";
import useSwiper from "@/hooks/useSwiper";
import deepClone from "@/utils/deepClone";
import { createSwiper } from "../../content/swiper/swiper";
import { SwiperItem } from "@/interface/swiper";
const { swiper, style, options, titleStartColor, titleEndColor, removeSwiper } = useSwiper();
const drag = ref<boolean>(false);

const addSwiper = () => {
  swiper.push(deepClone(createSwiper()));
};

const delSwiper = (id: string) => {
  const index = swiper.findIndex((el: any) => el.id === id);
  removeSwiper(index);
};

const draggableEnd = () => {
  drag.value = false;
};

const linkVisible = ref<boolean>(false);
const currentLinkId = ref<string>("");
const currentSwiperId = ref<string>("");
const currentLinkForm = ref<InsideLinks>();
const openSelectLink = (swiper: SwiperItem) => {
  currentSwiperId.value = swiper.id;
  linkVisible.value = true;
  currentLinkId.value = swiper.link?.id as string;
  currentLinkForm.value = deepClone(swiper.link);
};

const confirmSelectLink = (link: any) => {
  const index = swiper.findIndex(
    (el: SwiperItem) => el.id === currentSwiperId.value
  );
  if (~index) {
    swiper[index].link = link;
  }
};

const closeModal = () => {
  currentSwiperId.value = "";
  currentLinkForm.value = {} as InsideLinks;
};
</script>

<template>
  <div class="swiper-content">
    <tabCard c-title="" s-title="" bgColor="transparent" padding="0">
      <template #content>
        <draggable
          v-model="swiper"
          item-key="id"
          v-bind="{ animation: 120 }"
          class="swiper-item-box"
          :component-data="{
            tag: 'div',
            type: 'transition-group',
            name: !drag ? 'flip-list' : null,
          }"
          @start="drag = true"
          @end="draggableEnd()"
        >
          <template #item="{ element }">
            <div class="swiper-item">
              <p class="item-title">
                <span>轮播图</span>
                <a-button
                  type="link"
                  danger
                  size="mini"
                  style="padding: 0"
                  @click="delSwiper(element.id)"
                  >删除</a-button
                >
              </p>
              <div class="cell">
                <span class="label">轮播图标题</span>
                <a-input
                  v-model:value="element.title"
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
                  <img v-if="element.path" :src="element.path" alt="swiper" />
                  <div v-else>
                    <plus-outlined></plus-outlined>
                  </div>
                </a-upload>
              </div>
              <div class="cell">
                <span class="label">标题位置</span>
                <a-radio-group
                  v-model:value="element.titlePosition"
                  button-style="solid"
                >
                  <a-radio-button value="top">顶部</a-radio-button>
                  <a-radio-button value="bottom">底部</a-radio-button>
                </a-radio-group>
              </div>
              <div class="cell" style="margin-bottom: 0">
                <span class="label">跳转链接 {{ element.link?.linkName }}</span>
                <a-button
                  type="link"
                  @click="openSelectLink(element)"
                  size="mini"
                  style="padding: 0"
                  >{{ element.link?.linkName ? "修改" : "选择链接" }}</a-button
                >
              </div>
            </div>
          </template>
        </draggable>

        <a-button class="add-btn" @click="addSwiper()">
          <plus-outlined></plus-outlined>
          <span>添加轮播图</span>
        </a-button>
      </template>
      <template #style>
        <div class="style">
          <p class="style-title">样式设置</p>
          <div class="cell">
            <span class="label">自动轮播</span>
            <a-radio-group
              v-model:value="options.autoPlay"
              button-style="solid"
            >
              <a-radio-button :value="true">是</a-radio-button>
              <a-radio-button :value="false">否</a-radio-button>
            </a-radio-group>
          </div>
          <div class="cell">
            <span class="label">切换时间</span>
            <div class="item-slider" style="width: 190px">
              <a-slider
                v-model:value="options.speed"
                :step="1"
                :min="1"
                :max="20"
              />
              <span class="unit-text">
                <span>{{ options.speed }}</span>
                <span>秒</span>
              </span>
            </div>
          </div>
          <div class="cell">
            <span class="label">指示器大小</span>
            <div class="item-slider" style="width: 190px">
              <a-slider
                v-model:value="style.dotSize"
                :step="1"
                :min="5"
                :max="15"
              />
              <span class="unit-text">
                <span>{{ style.dotSize }}</span>
                <span>像素</span>
              </span>
            </div>
          </div>
          <div class="cell">
            <span class="label">指示器形状</span>
            <a-radio-group
              v-model:value="style.dotShape"
              button-style="solid"
            >
              <a-radio-button value="round">圆形</a-radio-button>
              <a-radio-button value="square">正方形</a-radio-button>
              <a-radio-button value="rectangular">长方形</a-radio-button>
            </a-radio-group>
          </div>
          <div class="cell">
            <span class="label">指示器默认颜色</span>
            <input v-model="style.dotDefaultBgColor" type="color" />
          </div>
          <div class="cell">
            <span class="label">指示器激活颜色</span>
            <input v-model="style.dotBgColor" type="color" />
          </div>
          <div class="cell">
            <span class="label">指示器位置</span>
            <a-radio-group
              v-model:value="options.dotPosition"
              button-style="solid"
            >
              <a-radio-button value="flex-start">居左</a-radio-button>
              <a-radio-button value="center">居中</a-radio-button>
              <a-radio-button value="flex-end">居右</a-radio-button>
            </a-radio-group>
          </div>
          <div class="cell">
            <span class="label">标题颜色</span>
            <input v-model="style.titleColor" type="color" />
          </div>
          <div class="cell">
            <span class="label">标题背景类型</span>
            <a-radio-group
              v-model:value="options.titleBgType"
              button-style="solid"
            >
              <a-radio-button :value="1">纯色</a-radio-button>
              <a-radio-button :value="2">线性渐变</a-radio-button>
            </a-radio-group>
          </div>
          <div class="cell">
            <span class="label">标题背景色</span>
            <div>
              <input type="color" v-model="titleStartColor" />
              <input style="margin-left: 10px;" v-model="titleEndColor" type="color" v-if="options.titleBgType === 2" />
            </div>
          </div>
        </div>
      </template>
    </tabCard>
  </div>
  <SelectLinkModel
    v-model:visible="linkVisible"
    :linkId="currentLinkId"
    :linkForm="currentLinkForm"
    @confirm="confirmSelectLink"
    @close="closeModal"
  />
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
    cursor: move;

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

  .style {
    background-color: rgb(240, 242, 245);
    padding: 12px 11px;
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
.item-slider {
  width: 100%;
  display: flex;

  .ant-slider {
    flex: 1;
    margin: 10px 10px 10px 6px;

    .ant-slider-rail {
      background: #dfdfe1;
    }
  }
}
.unit-text {
  padding: 0 10px;
  line-height: 32px;
  font-size: 12px;
}
</style>
