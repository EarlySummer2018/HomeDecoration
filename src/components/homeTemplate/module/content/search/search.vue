<script setup lang="ts">
import { SearchOutlined } from "@ant-design/icons-vue";
const props = defineProps<{ current: string; value: any }>();
import { useTemplate } from "@/store";
const templateStore = useTemplate();
</script>

<template>
  <div
    class="search move"
    :data-current="props.current"
    :class="{ active: templateStore.current === props.current }"
  >
    <div class="search-bar">
      <SearchOutlined class="icon" />
      <span>{{ value.placeholder }}</span>
    </div>
    <div class="del-btn" @click="templateStore.deleteModule(props.current)">
      删除
    </div>
  </div>
</template>

<style lang="scss">
.search {
  width: 100%;
  height: 50px;
  background: #f1f1f2;
  padding: 10px 10px;
  &-bar {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    color: #999;
    display: flex;
    align-items: center;
    font-size: 12px;
    background-color: #fff;
  }
}
</style>
