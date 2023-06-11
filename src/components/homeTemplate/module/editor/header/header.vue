<script lang="ts" setup>
import { ref } from "vue";
import {useEditor} from "@/store";
import Card from '@/components/card/card'
const {headerEditor} = useEditor()
const activeKey = ref<number | string>(1)
</script>

<template>
  <div class="header-content">
    <a-tabs v-model:activeKey="activeKey" animated centered>
      <a-tab-pane :key="1" tab="页面设置">
        <Card title="基本信息">
          <div class="cell">
            <span class="label">页面名称</span>
            <a-input v-model:value.tirm="headerEditor.pageName" placeholder="请输入页面名称" />
          </div>
          <div class="cell">
            <span class="label">分享标题</span>
            <a-input v-model:value.trim="headerEditor.shareTitle" placeholder="请输入分享标题" />
          </div>
        </Card>
      </a-tab-pane>
      <a-tab-pane :key="2" tab="标题栏设置">
        <Card title="标题栏设置">
          <div class="cell">
            <span class="label">标题名称</span>
            <a-input v-model:value.tirm="headerEditor.title" placeholder="请输入标题名称" />
          </div>
          <div class="cell">
            <span class="label">文字颜色</span>
            <a-radio-group v-model:value="headerEditor.textColor" button-style="solid">
              <a-radio-button value="white">白色</a-radio-button>
              <a-radio-button value="black">黑色</a-radio-button>
            </a-radio-group>
          </div>
          <div class="cell">
            <span class="label">标题栏背景</span>
            <input type="color" v-model="headerEditor.titleBarBgColor" />
          </div>
        </Card>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style lang="scss">
.header-content {
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
