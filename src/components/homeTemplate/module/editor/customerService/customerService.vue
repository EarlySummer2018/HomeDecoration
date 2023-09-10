<script lang="ts" setup>
import { PlusOutlined } from "@ant-design/icons-vue";
import tabCard from "@/components/tabsCard/tabCard.vue";
import useCustomerService from "@/hooks/useCustomerService";
const { data, style, options } = useCustomerService();
</script>
<template>
  <div class="customer-servicer">
    <tabCard>
      <template #content>
        <div class="editor-cell">
          <span class="label">功能设置</span>
          <a-radio-group
            v-model:value="options.type"
            button-style="solid"
          >
            <a-radio-button value="online">在线客服</a-radio-button>
            <a-radio-button value="callPhone">拨打电话</a-radio-button>
          </a-radio-group>
        </div>
        <div class="editor-cell">
          <span class="label">客服图标</span>
          <a-upload
            name="swiper"
            class="uploader"
            :show-upload-list="false"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          >
            <img v-if="data.icon" :src="data.icon" alt="customerService" />
            <div v-else>
              <plus-outlined></plus-outlined>
            </div>
          </a-upload>
        </div>
      </template>
      <template #style>
        <div class="editor-cell">
          <span class="label">底边距</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="style.bottom"
              :step="1"
              :min="0"
              :max="50"
            />
            <span class="unit-text">
              <span>{{ style.bottom }}</span>
              <span>像素</span>
            </span>
          </div>
        </div>
        <div class="editor-cell">
          <span class="label">右边距</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="style.right"
              :step="1"
              :min="0"
              :max="50"
            />
            <span class="unit-text">
              <span>{{ style.right }}</span>
              <span>像素</span>
            </span>
          </div>
        </div>
        <div class="editor-cell">
          <span class="label">透明度</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="style.opacity"
              :step="1"
              :min="0"
              :max="100"
            />
            <span class="unit-text">
              <span>{{ style.opacity }}</span>
              <span>%</span>
            </span>
          </div>
        </div>
      </template>
    </tabCard>
  </div>
</template>
<style lang="scss">
.customer-servicer {
  .uploader {
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
</style>
