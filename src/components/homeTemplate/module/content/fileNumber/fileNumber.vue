<script lang="ts" setup>
import { useTemplate } from "@/store";
defineProps<{ id: string; value: any; type: string }>();
const templateStore = useTemplate();
</script>
<template>
  <div
    class="file-number move"
    :data-type="type"
    :data-id="id"
    :class="{ active: templateStore.id === id }"
    :style="{
      backgroundColor: value.bgColor,
      padding: `${value.py}px ${value.px}px`,
      textAlign: value.textAlign,
    }"
  >
    <span
      :style="{
        fontSize: value.fontSize + 'px',
        color: value.fontColor,
      }"
      >{{ value.content }}</span
    >
    <div class="del-btn" @click="templateStore.deleteModule(id)">删除</div>
  </div>
</template>
<style lang="scss">
.file-number {
  width: 100%;
  padding: 6px 0;
  background-color: #ffffff;
}
</style>
