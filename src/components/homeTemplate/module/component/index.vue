<script lang="ts" setup>
import { ref } from "vue";
import {
  PictureOutlined,
  SearchOutlined,
  BorderOutlined,
  MinusOutlined,
  TrademarkOutlined,
  WechatOutlined,
  CustomerServiceOutlined,
  SoundOutlined
} from "@ant-design/icons-vue";
import { useTemplate } from "@/store";
import { defaultSwiperItem } from "../content/swiper/swiper";
import deepClone from "@/utils/deepClone";
import guid from "@/utils/guid";
const templateStore = useTemplate();
const activeKey = ref<string[]>(["media", "other"]);

const clickCell = (type: string) => {
  let value: any = {},
    options: any = {};
  if (type === "swiper") {
    value = [
      { ...deepClone(defaultSwiperItem), id: guid() },
      { ...deepClone(defaultSwiperItem), id: guid() },
    ];
    options = {
      dotPosition: "center",
      dotBgColor: "#ff69b4",
      dotDefaultBgColor: "#ffffff",
      dotShape: "round",
      dotSize: 10,
      autoPlay: true,
      speed: 3,
    };
  } else if (type === "search") {
    value = {
      placeholder: "请输入关键词进行搜索",
      textAlign: "left",
      style: "square",
      containerBgColor: "#f1f1f2",
      searchBgColor: "#fff",
    };
  } else if (type === "blanks") {
    value = {
      height: 10,
      bgColor: "#FFFFFF",
    };
  } else if (type === "polyline") {
    value = {
      height: 1,
      padding: 10,
      style: "solid",
      lineColor: "#000000",
      bgColor: "#FFFFFF",
    };
  } else if (type === "fileNumber") {
    value = {
      content: "网站备案号：粤ICP备10000000号-1",
      link: "https://beian.miit.gov.cn/",
      fontSize: 10,
      fontColor: "#000000",
      textAlign: "center",
      px: 0,
      py: 6,
      bgColor: "#FFFFFF",
    };
  } else if (type === 'customerService') {
    value = {
      type: 'online',
      bottom: 10,
      right: 0,
      icon: '',
      opacity: 1
    }
  } else if (type === 'bulletin') {
    value = {
      textColor: '#1890ff',
      bgColor: '#cae1f7',
      margin: 0,
      fontSize: 12,
      content: '这是系统公告组件',
      link: {},
    }
  }
  templateStore.addModule(type, value, options);
};
</script>

<template>
  <div class="component-module" draggable="false">
    <a-collapse
      v-model:activeKey="activeKey"
      expand-icon-position="right"
      ghost
    >
      <a-collapse-panel key="media" header="媒体组件">
        <div class="cell">
          <div class="cell-item" @click="clickCell('swiper')">
            <PictureOutlined class="icon" />
            <span class="name">轮播图</span>
          </div>
          <div class="cell-item" @click="clickCell('search')">
            <SearchOutlined class="icon" />
            <span class="name">搜索框</span>
          </div>
        </div>
      </a-collapse-panel>
      <a-collapse-panel key="other" header="商城组件">
        <div class="cell">
          <div class="cell-item" @click="clickCell('bulletin')">
            <SoundOutlined class="icon" />
            <span class="name">公告</span>
          </div>
          <div class="cell-item" @click="clickCell('customerService')">
            <CustomerServiceOutlined class="icon" />
            <span class="name">客服</span>
          </div>
        </div>
      </a-collapse-panel>
      <a-collapse-panel key="other" header="其他组件">
        <div class="cell">
          <div class="cell-item" @click="clickCell('blanks')">
            <BorderOutlined class="icon" />
            <span class="name">辅助空白</span>
          </div>
          <div class="cell-item" @click="clickCell('polyline')">
            <MinusOutlined class="icon" />
            <span class="name">辅助线</span>
          </div>
          <div class="cell-item" @click="clickCell('fileNumber')">
            <TrademarkOutlined class="icon" />
            <span class="name">备案号</span>
          </div>
          <div class="cell-item" @click="clickCell('weixinOfficial')">
            <WechatOutlined class="icon" />
            <span class="name">公众号</span>
          </div>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<style lang="scss">
.component-module {
  .ant-collapse-content-box {
    padding: 16px;
    padding-top: 0 !important;
  }
  .ant-collapse-header {
    padding: 14px 16px !important;
    font-size: 13px;
    font-weight: 700;
    color: #595961 !important;
  }
  .cell {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    &-item {
      width: 90px;
      height: 90px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      font-size: 12px;
      color: #595961;
      cursor: pointer;
      .name,
      .icon {
        pointer-events: none;
      }

      &:hover {
        background: #f7f7f7;
        border-radius: 4px;
      }

      .icon {
        font-size: 26px;
        color: #595961;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
