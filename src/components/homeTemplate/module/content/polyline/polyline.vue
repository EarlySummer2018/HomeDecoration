<script lang="ts" setup>
import { useTemplate } from "@/store";
defineProps<{ id: string; value: any; type: string }>();
const templateStore = useTemplate();
</script>
<template>
  <div
    class="polyline-content move"
    :data-type="type"
    :data-id="id"
    :class="{ active: templateStore.id === id }"
    :style="{
        backgroundColor: value.bgColor,
        padding: `${value.padding}px 0px`,
      }"
  >
    <p
      class="line"
      :style="{
        borderTop: `${value.height}px ${value.style} ${value.lineColor}`
      }"
    ></p>
    <div class="del-btn" @click="templateStore.deleteModule(id)">删除</div>
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
