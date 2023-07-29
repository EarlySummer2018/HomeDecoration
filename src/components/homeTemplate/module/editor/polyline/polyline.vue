<script lang="ts" setup>
import tabCard from "@/components/tabsCard/tabCard.vue";
import usePolyline from "@/hooks/usePolyline";
const { polylineStyle } = usePolyline();
</script>
<template>
  <div class="polyline-editor">
    <tabCard :showContent="false" :isHideHeader="true">
      <template #style>
        <div class="editor-cell">
          <span class="label">线条样式</span>
          <a-radio-group
            v-model:value="polylineStyle.style"
            button-style="solid"
          >
            <a-radio-button value="solid">实线</a-radio-button>
            <a-radio-button value="dashed">虚线</a-radio-button>
            <a-radio-button value="dotted">点状</a-radio-button>
          </a-radio-group>
        </div>
        <div class="editor-cell">
          <span class="label">高度</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="polylineStyle.height"
              :step="1"
              :min="1"
              :max="20"
            />
            <span class="unit-text">
              <span>{{ polylineStyle.height }}</span>
              <span>像素</span>
            </span>
          </div>
        </div>
        <div class="editor-cell">
          <span class="label">上下边距</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="polylineStyle.padding"
              :step="1"
              :min="0"
              :max="50"
            />
            <span class="unit-text">
              <span>{{ polylineStyle.padding }}</span>
              <span>像素</span>
            </span>
          </div>
        </div>
        <div class="editor-cell">
          <span class="label">线条颜色</span>
          <input v-model="polylineStyle.lineColor" type="color" />
        </div>
        <div class="editor-cell">
          <span class="label">背景色</span>
          <input v-model="polylineStyle.bgColor" type="color" />
        </div>
      </template>
    </tabCard>
  </div>
</template>
