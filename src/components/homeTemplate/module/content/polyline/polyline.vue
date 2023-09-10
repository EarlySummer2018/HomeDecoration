<script lang="ts" setup>
import { useTemplate } from "@/store";
const props = defineProps<{ id: string; data: any }>();
const templateStore = useTemplate();
</script>
<template>
  <div
    class="polyline-content move"
    data-type="polyline"
    :id="`cx-${props.id}`"
    :class="{ active: templateStore.id === id }"
    :style="{
      backgroundColor: data.style.bgColor,
      padding: `${data.style.padding}px 0px`,
    }"
  >
    <p
      class="line"
      :style="{
        borderTop: `${data.style.height}px ${data.style.style} ${data.style.lineColor}`,
      }"
    ></p>
  </div>
</template>
<style lang="scss">
.polyline-content {
  width: 100%;
  background-color: #ffffff;
  position: relative;
  .line {
    margin: 0;
  }
}
</style>
