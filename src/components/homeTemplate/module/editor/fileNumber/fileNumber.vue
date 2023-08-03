<script lang="ts" setup>
import tabCard from "@/components/tabsCard/tabCard.vue";
import useFileNumber from "@/hooks/useFileNumber";
const { fileNumberContent } = useFileNumber();
</script>
<template>
  <div class="banks-editor">
    <tabCard>
      <template #content>
        <div class="editor-cell">
          <span class="label">内容</span>
          <a-input
            v-model:value.tirm="fileNumberContent.content"
            placeholder="请输入内容"
          />
        </div>
        <div class="editor-cell">
          <span class="label">链接</span>
          <a-input
            v-model:value.tirm="fileNumberContent.link"
            placeholder="请输入链接"
          />
        </div>
      </template>
      <template #style>
        <div class="editor-cell">
          <span class="label">文字大小</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="fileNumberContent.fontSize"
              :step="1"
              :min="12"
              :max="24"
            />
            <span class="unit-text">
              <span>{{ fileNumberContent.fontSize }}</span>
              <span>像素</span>
            </span>
          </div>
        </div>
        <div class="editor-cell">
          <span class="label">文字对齐</span>
          <a-radio-group
            v-model:value="fileNumberContent.textAlign"
            button-style="solid"
          >
            <a-radio-button value="left">居左</a-radio-button>
            <a-radio-button value="center">居中</a-radio-button>
            <a-radio-button value="right">居右</a-radio-button>
          </a-radio-group>
        </div>
        <div class="editor-cell">
          <span class="label">文字颜色</span>
          <input v-model="fileNumberContent.fontColor" type="color" />
        </div>
        <div class="editor-cell">
          <span class="label">上下边距</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="fileNumberContent.py"
              :step="1"
              :min="0"
              :max="50"
            />
            <span class="unit-text">
              <span>{{ fileNumberContent.py }}</span>
              <span>像素</span>
            </span>
          </div>
        </div>
        <div class="editor-cell">
          <span class="label">左右边距</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="fileNumberContent.px"
              :step="1"
              :min="0"
              :max="50"
            />
            <span class="unit-text">
              <span>{{ fileNumberContent.px }}</span>
              <span>像素</span>
            </span>
          </div>
        </div>
        <div class="editor-cell">
          <span class="label">背景颜色</span>
          <input v-model="fileNumberContent.bgColor" type="color" />
        </div>
      </template>
    </tabCard>
  </div>
</template>
