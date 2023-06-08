<script lang="ts" setup>
import { ref } from "vue";
import { useTemplate } from '@/store'
import Swiper from './swiper/swiper.vue'
import useDrag from "@/utils/useDrag";
const phoneContentHeaderBgColor = ref<string>('#fff')
const templateStore = useTemplate()
const {dragStart, dragEnter, dragOver} = useDrag(templateStore.list)
const changeCurrent = (e:Event) => {
    const current = (e.target as any).dataset?.current
    if (current) {
        templateStore.changeCurrent(current)
    }
}
</script>

<template>
    <section class="content-module" @click="changeCurrent">
        <div class="header move" data-current="1" :class="{ active: templateStore.current === '1' }">
        </div>
        <TransitionGroup name="module" tag="div">
            <div 
              v-for="(item, index) in templateStore.list" 
              :key="item.id"
              :draggable="true"
              @dragstart="dragStart(index)"
              @dragenter="dragEnter($event, index)"
              @dragover="dragOver($event)"
            >
              <swiper v-if="item.type === 'swiper'" :current="item.id" :swiper="item.value"></swiper>
            </div>
        </TransitionGroup>
    </section>
</template>

<style lang="scss">
.module-move, /* 对移动中的元素应用的过渡 */
.module-enter-active,
.module-leave-active {
  transition: all 0.2s ease;
}

.module-enter-from,
.module-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.module-leave-active {
  position: absolute;
}
.content-module {
    background-color: #fafafa;
    min-height: 648px;
    position: relative;
    min-width: 375px;
    width: 375px;
    max-height: 648px;
    box-shadow: 0 0 28px 0 #ccc;
    margin-top: 25px;
    padding-top: 66px;
    background-color: #fff;

    .header {
        position: absolute;
        top: 0;
        left: 0;
        height: 66px;
        width: 100%;
        background-color: v-bind('phoneContentHeaderBgColor');
        background-size: 100%;
        background-image: url('@/assets/phone-top-black.79cd4211.png');
        z-index: 9;
    }
}
</style>
