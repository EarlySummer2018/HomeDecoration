<script lang="ts" setup>
import tabCard from "@/components/tabsCard/tabCard.vue";
import useBlanks from "@/hooks/useBlanks";
const { blanksStyle } = useBlanks();
</script>
<template>
  <div class="banks-editor">
    <tabCard :showContent="false" :isHideHeader="true">
      <template #style>
        <div class="editor-cell">
          <span class="label">高度</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="blanksStyle.height"
              :step="1"
              :min="5"
              :max="200"
            />
            <span class="unit-text">
              <span>{{ blanksStyle.height }}</span>
              <span>像素</span>
            </span>
          </div>
        </div>
        <div class="editor-cell">
          <span class="label">背景色</span>
          <input v-model="blanksStyle.bgColor" type="color" />
        </div>
      </template>
    </tabCard>
  </div>
</template>
