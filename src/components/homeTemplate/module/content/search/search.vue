<script setup lang="ts">
import { SearchOutlined } from "@ant-design/icons-vue";
const props = defineProps<{ id: string; value: any }>();
import { useTemplate } from "@/store";
import { onMounted } from "vue";
const templateStore = useTemplate();
onMounted(()=>{
  console.log(props);
})
</script>

<template>
  <div
    class="search move"
    data-type="search"
    :id="`cx-${props.id}`"
    :class="{ active: templateStore.id === props.id }"
  >
    <div class="search-bar" :class="[props.value.style, props.value.textAlign]">
      <SearchOutlined class="icon" />
      <span>{{ props.value.placeholder }}</span>
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
    &.round {
      border-radius: 4px;
    }
    &.circular {
      border-radius: 100px;
    }
    &.left {
      justify-content: flex-start;
    }
    &.right {
      justify-content: flex-end;
    }
    &.center {
      justify-content: center;
    }
  }
}
</style>
