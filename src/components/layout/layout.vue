<template>
  <a-layout id="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible :width="headerLeft"
      class="layout-sider-bar">
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content class="layout-content">
        <HomeTemplateIndex />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import HomeTemplateIndex from '@/components/homeTemplate/index.vue'
import { ref, watch } from "vue";
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["1"]);
const headerWidth = ref<string>('calc(100% - 160px)')
const headerLeft = ref<string>('160px')
watch(
  collapsed,
  (nVal): void => {
    if (!nVal) {
      headerWidth.value = 'calc(100% - 160px)'
      headerLeft.value = '160px'
    } else {
      headerWidth.value = 'calc(100% - 80px)'
      headerLeft.value = '80px'
    }
  })
</script>
<style lang="scss">
#layout {
  min-width: 1400px;

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }

  .layout-sider-bar {
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
  }

  .layout-content {
    padding: 80px 20px 20px 20px;
    min-height: calc(100vh - 64px);
    margin-left: v-bind('headerLeft');
    overflow: auto;
    z-index: 1;
    right: 0px;
  }

  .layout-header {
    position: fixed;
    top: 0;
    right: 0;
    width: v-bind('headerWidth');
    background: #fff;
    padding: 0;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    z-index: 8;
  }
}</style>
