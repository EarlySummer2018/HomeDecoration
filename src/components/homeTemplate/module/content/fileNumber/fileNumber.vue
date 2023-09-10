<script lang="ts" setup>
import { useTemplate } from "@/store";
const props = defineProps<{ id: string; data: any }>();
const templateStore = useTemplate();
</script>
<template>
  <div
    class="file-number move"
    data-type="fileNumber"
    :id="`cx-${props.id}`"
    :class="{ active: templateStore.id === id }"
    :style="{
      backgroundColor: data.style.bgColor,
      padding: `${data.style.py}px ${data.style.px}px`,
      textAlign: data.style.textAlign,
    }"
  >
    <span
      :style="{
        fontSize: data.style.fontSize + 'px',
        color: data.style.fontColor,
      }"
      >{{ data.value.content }}</span
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
