<script lang="ts" setup>
import {ComponentModule, ContentModule, EditorModule} from './module'
</script>

<template>
  <div class="home-template-index">
    <div class="home-template-index-container">
        <section class="col component">
            <component-module></component-module>
        </section>
        <content-module></content-module>
        <section class="col editor">
            <editor-module></editor-module>
        </section>
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
        padding: 10px 15px;
        background: #f8f9fa;
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
        z-index: 99;
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
