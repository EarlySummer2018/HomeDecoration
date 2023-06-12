<script lang="ts" setup>
import { ref } from "vue";
import Card from '@/components/card/card'
const activeKey = ref<number | string>(1)
const searchStyle = ref<string>('square')
const textAlign = ref<string>('left')
const searchPlaceholder = ref<string>('请输入关键词进行搜索')
</script>

<template>
  <div class="search-content">
    <a-tabs v-model:activeKey="activeKey" animated centered>
      <a-tab-pane :key="1" tab="内容设置">
        <Card title="内容设置">
          <div class="cell">
            <span class="label">提示文字</span>
            <a-input v-model:value="searchPlaceholder" placeholder="请输入关键词进行搜索" />
          </div>
        </Card>
      </a-tab-pane>
      <a-tab-pane :key="2" tab="样式设置">
        <Card title="样式设置">
          <div class="cell">
            <span class="label">搜索框样式</span>
            <a-radio-group v-model:value="searchStyle" button-style="solid">
              <a-radio-button value="square">方形</a-radio-button>
              <a-radio-button value="round">圆角</a-radio-button>
              <a-radio-button value="circular">圆弧</a-radio-button>
            </a-radio-group>
          </div>
          <div class="cell">
            <span class="label">文字对齐</span>
            <a-radio-group v-model:value="textAlign" button-style="solid">
              <a-radio-button value="left">居左</a-radio-button>
              <a-radio-button value="center">居中</a-radio-button>
              <a-radio-button value="right">居右</a-radio-button>
            </a-radio-group>
          </div>
        </Card>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style lang="scss">
.search-content {
  .cell {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: rgba(0,0,0,.65);
      margin-bottom: 15px;
      .label {
        display: block;
        font-size: 12px;
        white-space: nowrap;
        margin-right: 20px;
      }
    }
  .ant-tabs-tab {
    padding: 12px 20px;
    color: #595961;
    width: 105px;
    margin: 0 30px;
    text-align: center;
  }
  .ant-input {
    font-size: 12px;
    border-radius: 5px;
  }
}
</style>
