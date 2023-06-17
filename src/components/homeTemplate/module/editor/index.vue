<script setup lang="ts">
import HeaderEdtior from './header/header.vue'
import Search from './search/search.vue';
import Swiper from './swiper/swiper.vue';
import { useTemplate } from '@/store';
import { nextTick, ref, watch } from 'vue';
const showEditor = ref<boolean>(true)
const templateStore = useTemplate()
watch(
  ()=>templateStore.id,
  async ()=>{
    showEditor.value = false
    await nextTick()
    showEditor.value = true
})
</script>

<template>
  <div class="editor-index" v-if="showEditor">
    <div class="title mt15">页面设置</div>
    <Search v-if="templateStore.type === 'search'" />
    <HeaderEdtior v-else-if="templateStore.type === 'header'" />
    <Swiper v-else-if="templateStore.type === 'swiper'" />
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
