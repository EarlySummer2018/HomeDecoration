<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import { getComponent } from "./editor";
import { useTemplate } from "@/store";
import { typeToText } from "@/utils/utils";
const showEditor = ref<boolean>(true);
const templateStore = useTemplate();
watch(
  () => templateStore.id,
  async () => {
    showEditor.value = false;
    await nextTick();
    showEditor.value = true;
  }
);
</script>

<template>
  <div class="editor-index" v-if="showEditor">
    <div class="title mt15">{{ typeToText(templateStore.currentType) }}</div>
    <component :is="getComponent(templateStore.type)" />
  </div>
</template>

<style lang="scss">
.editor-index {
  .title {
    font-size: 13px;
    font-weight: 600;
    color: #595961;
    margin-top: 5px;
  }
}
</style>
