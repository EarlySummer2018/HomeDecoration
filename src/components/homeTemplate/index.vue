<script lang="ts" setup>
import { ref } from 'vue';
import ComponentModule from './module/component/index.vue'
import Swiper from './module/swiper/index.vue'
const phoneContentHeaderBgColor = ref<string>('#fff')
</script>

<template>
  <div class="home-template-index">
    <div class="home-template-index-container">
        <section class="col component">
            <component-module></component-module>
        </section>
        <section class="col phone-content">
            <div class="phone-content-header"></div>
            <Swiper></Swiper>
        </section>
        <section class="col editor">3</section>
    </div>
    <footer class="home-template-index-footer-box">
        <a-button style="position: relative;z-index: 2;" type="primary">保存</a-button>
    </footer>
  </div>
</template>

<style lang="scss">
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
        // border: 1px solid #ddd;
        margin-top: 25px;
        padding-top: 66px;
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
