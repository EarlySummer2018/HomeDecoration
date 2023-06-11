<script setup lang="ts">
import HeaderEdtior from './header/header.vue'
import { useTemplate } from '@/store';
const templateStore = useTemplate()
</script>

<template>
  <div class="editor-index">
    <div class="title mt15">页面设置</div>
    <HeaderEdtior v-show="templateStore.current === 'header'" />
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
