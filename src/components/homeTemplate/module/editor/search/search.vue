<script lang="ts" setup>
import tabCard from "@/components/tabsCard/tabCard.vue";
import useSearch from "@/hooks/useSearch";
const { searchContent } = useSearch();
</script>

<template>
  <div class="search-content">
    <tabCard>
      <template #content>
        <div class="cell">
          <span class="label">提示文字</span>
          <a-input
            v-model:value="searchContent.placeholder"
            placeholder="请输入关键词进行搜索"
          />
        </div>
      </template>
      <template #style>
        <div class="cell">
          <span class="label">搜索框样式</span>
          <a-radio-group
            v-model:value="searchContent.style"
            button-style="solid"
          >
            <a-radio-button value="square">方形</a-radio-button>
            <a-radio-button value="round">圆角</a-radio-button>
            <a-radio-button value="circular">圆弧</a-radio-button>
          </a-radio-group>
        </div>
        <div class="cell">
          <span class="label">文字对齐</span>
          <a-radio-group
            v-model:value="searchContent.textAlign"
            button-style="solid"
          >
            <a-radio-button value="left">居左</a-radio-button>
            <a-radio-button value="center">居中</a-radio-button>
            <a-radio-button value="right">居右</a-radio-button>
          </a-radio-group>
        </div>
      </template>
    </tabCard>
  </div>
</template>

<style lang="scss">
.search-content {
  .cell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgba(0, 0, 0, 0.65);
    margin-bottom: 15px;
    .label {
      display: block;
      font-size: 12px;
      white-space: nowrap;
      margin-right: 20px;
    }
  }
}
</style>
