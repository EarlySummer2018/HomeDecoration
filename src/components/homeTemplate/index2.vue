<script lang="ts" setup>
import { ref } from 'vue';
import useDrag from '@/utils/useDrag'
const phoneContentHeaderBgColor = ref<string>('#fff')
const list = ref<any>([{
    id: 1,
    name: 1
},{
    id: 2,
    name: 2
},{
    id: 3,
    name: 3
},{
    id: 4,
    name: 4
}])
const { dragStart, dragEnter, dragOver} = useDrag(list)
</script>

<template>
  <div class="home-template-index">
    <TransitionGroup name="list" tag="ul">
        <li
            class="list-item"
            :draggable="true" 
            @dragstart="dragStart(index)"
            @dragenter="dragEnter($event, index)"
            @dragover="dragOver($event)"
            v-for="(item, index) in list"
            :key="item.id"
        >{{item.name}}</li>
    </TransitionGroup>
  </div>
</template>

<style lang="scss">
.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
.home-template-index {
    position: relative;
    width: 100%;
    min-height: 100vh;
    // padding-bottom: 100px;
    &-container {
        min-height: calc(100vh - 150px);
        display: flex;
        justify-content: space-between;
    }
    .list {
        width: 300px;
        background-color: #fff;
        padding: 10px;
        border-radius: 5px;
        &-item {
            width: 100%;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: hotpink;
            margin-bottom: 10px;
        }
    }
    .col {
        background-color: #fafafa;
        min-height: 648px;
    }
    .component {
        width: 310px;
        min-width: 310px;
    }
    .editor {
        width: 374px;
        min-width: 374px;
    }
    .phone-content {
        position: relative;
        min-width: 375px;
        width: 375px;
        max-height: 648px;
        box-shadow: 0 0 28px 0 #ccc;
        border: 1px solid #ddd;
        margin-top: 25px;
        background-color: #fff;
        &-header {
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
    &-footer-box {
        position: fixed;
        height: 50px;
        width: 80%;
        min-width: 200px;
        left: 225px;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        &::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
            background-color: #fff;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            transform: perspective(250px) rotateX(20deg);
            box-shadow: 0 0 4px 0 hsla(0,0%,78.4%,.5);
        }
    }
}
</style>
