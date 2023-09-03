<script lang="ts" setup>
import tabCard from "@/components/tabsCard/tabCard.vue";
import useCustomerService from "@/hooks/useCustomerService";
const { customerServiceStyle } = useCustomerService();
</script>
<template>
  <div class="polyline-editor">
    <tabCard>
      <template #content>
        <div class="editor-cell">
          <span class="label">功能设置</span>
          <a-radio-group
            v-model:value="customerServiceStyle.type"
            button-style="solid"
          >
            <a-radio-button value="online">在线客服</a-radio-button>
            <a-radio-button value="callPhone">拨打电话</a-radio-button>
          </a-radio-group>
        </div>
        <div class="editor-cell">
          <span class="label">客服图标</span>
        </div>
      </template>
      <template #style>
        <div class="editor-cell">
          <span class="label">底边距</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="customerServiceStyle.bottom"
              :step="1"
              :min="0"
              :max="50"
            />
            <span class="unit-text">
              <span>{{ customerServiceStyle.bottom }}</span>
              <span>像素</span>
            </span>
          </div>
        </div>
        <div class="editor-cell">
          <span class="label">右边距</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="customerServiceStyle.right"
              :step="1"
              :min="0"
              :max="50"
            />
            <span class="unit-text">
              <span>{{ customerServiceStyle.right }}</span>
              <span>像素</span>
            </span>
          </div>
        </div>
        <div class="editor-cell">
          <span class="label">透明度</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="customerServiceStyle.opacity"
              :step="1"
              :min="0"
              :max="100"
            />
            <span class="unit-text">
              <span>{{ customerServiceStyle.opacity }}</span>
              <span>%</span>
            </span>
          </div>
        </div>
      </template>
    </tabCard>
  </div>
</template>