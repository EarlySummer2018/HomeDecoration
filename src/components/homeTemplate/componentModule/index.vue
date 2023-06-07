<script lang="ts" setup>
import { ref } from "vue";
import {PictureOutlined} from '@ant-design/icons-vue'
const activeKey = ref<string[]>(['1'])

const clickCell = (e:Event) => {
    console.log(e);
    
}
</script>

<template>
    <div class="component-module">
        <a-collapse v-model:activeKey="activeKey" expand-icon-position="right" ghost>
            <a-collapse-panel key="1" header="媒体组件">
                <div class="cell" @click="clickCell">
                    <div class="cell-item">
                        <PictureOutlined class="icon" />
                        <span class="name">轮播图</span>
                    </div>
                </div>
            </a-collapse-panel>
        </a-collapse>
    </div>
</template>

<style lang="scss">
.component-module {
    .ant-collapse-content-box {
        padding: 16px;
        padding-top: 0 !important;
    }
    .ant-collapse-header{
        padding: 14px 16px !important;
        font-size: 13px;
        font-weight: 700;
        color: #595961 !important;
     }
    .cell {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        &-item {
            width: 90px;
            height: 90px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            font-size: 12px;
            color: #595961;
            cursor: pointer;
            .name,
            .icon {
                pointer-events: none;
            }

            &:hover {
                background: #f7f7f7;
                border-radius: 4px;
            }

            .icon {
                font-size: 26px;
                color: #595961;
            }
        }
    }
}
</style>
