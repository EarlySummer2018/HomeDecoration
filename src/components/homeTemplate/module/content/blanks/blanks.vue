<script lang="ts" setup>
import { useTemplate } from "@/store";
defineProps<{ id: string; value: any; type: string }>();
const templateStore = useTemplate();
</script>
<template>
  <div
    class="blanks-content move"
    :data-type="type"
    :data-id="id"
    :class="{ active: templateStore.id === id }"
    :style="{
      backgroundColor: value.bgColor,
      height: value.height + 'px',
    }"
  >
    <div class="del-btn" @click="templateStore.deleteModule(id)">删除</div>
  </div>
</template>
<style lang="scss">
.blanks-content {
  width: 100%;
  height: 10px;
  background-color: #ffffff;
}
</style>
