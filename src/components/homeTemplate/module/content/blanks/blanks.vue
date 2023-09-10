<script lang="ts" setup>
import { useTemplate } from "@/store";
const props = defineProps<{ id: string; data: any }>();
const templateStore = useTemplate();
</script>
<template>
  <div
    class="blanks-content move"
    data-type="blanks"
    :id="`cx-${props.id}`"
    :class="{ active: templateStore.id === id }"
    :style="{
      backgroundColor: props.data.style.bgColor,
      height: props.data.style.height + 'px',
    }"
  >
  </div>
</template>
<style lang="scss">
.blanks-content {
  width: 100%;
  height: 10px;
  background-color: #ffffff;
}
</style>
