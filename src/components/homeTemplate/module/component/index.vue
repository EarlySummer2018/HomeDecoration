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
import { getModelValue } from './data';
const templateStore = useTemplate();
const activeKey = ref<string[]>(["media", "other"]);

const clickCell = (type: string) => {
  const res = getModelValue(type)
  if (!res) return
  templateStore.addModule(type, res.value, res.options||{});
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
      <a-collapse-panel key="mall" header="商城组件">
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
