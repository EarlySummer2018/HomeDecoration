<script lang="ts" setup>
import { useTemplate } from "@/store";
const props = defineProps<{ id: string; value: any }>();
const templateStore = useTemplate();
</script>
<template>
  <div
    class="blanks-content move"
    data-type="blanks"
    :id="`cx-${props.id}`"
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
