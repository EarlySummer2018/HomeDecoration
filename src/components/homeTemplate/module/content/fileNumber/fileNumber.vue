<script lang="ts" setup>
import { useTemplate } from "@/store";
const props = defineProps<{ id: string; value: any }>();
const templateStore = useTemplate();
</script>
<template>
  <div
    class="file-number move"
    data-type="fileNumber"
    :id="`cx-${props.id}`"
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
  </div>
</template>
<style lang="scss">
.file-number {
  width: 100%;
  padding: 6px 0;
  background-color: #ffffff;
}
</style>
