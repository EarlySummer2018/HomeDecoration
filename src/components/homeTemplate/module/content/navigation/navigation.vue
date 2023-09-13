<script lang="ts" setup>
import { useTemplate } from "@/store";
import errImg from "@/utils/loadErrorImg";
const props = defineProps<{ id: string; data: any }>();
const templateStore = useTemplate();
</script>
<template>
  <div
    class="navigation-content move"
    data-type="navigation"
    :id="`cx-${props.id}`"
    :class="{ active: templateStore.id === id }"
    :style="{
      backgroundColor: data.style.bgColor,
      padding: `${data.style.py}px 0px`,
      gridTemplateColumns: `repeat(${data.options.colNum}, 1fr)`,
    }"
  >
    <div
      class="navigation-item"
      :style="{ color: data.style.textColor }"
      v-for="item in data.value"
      :key="item.id"
    >
      <a-image class="img" :src="item.icon" :fallback="errImg" />
      <p :style="{ margin: 0 }">{{ item.text }}</p>
    </div>
  </div>
</template>
<style lang="scss">
.navigation-content {
  width: 100%;
  display: grid;
  .navigation-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .img {
      width: 44px;
      height: 44px;
    }
  }
}
</style>
