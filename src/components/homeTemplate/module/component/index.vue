<script lang="ts" setup>
import { ref } from "vue";
import {PictureOutlined,SearchOutlined} from '@ant-design/icons-vue'
import { useTemplate } from "@/store";
import { defaultSwiperItem } from "../content/swiper/swiper";
const templateStore = useTemplate()
const activeKey = ref<string[]>(['1'])

const clickCell = (type:string) => {
    let value:any = []
    if (type === 'swiper') {
        value = [defaultSwiperItem, defaultSwiperItem]
    }else if (type === 'search') {
        value = {
            placeholder: '请输入搜索关键字',
            type: 'square',
            align: 'left'
        }
    }
    templateStore.addModule(type,value)
}
</script>

<template>
    <div class="component-module" draggable="false">
        <a-collapse v-model:activeKey="activeKey" expand-icon-position="right" ghost>
            <a-collapse-panel key="1" header="媒体组件">
                <div class="cell">
                    <div class="cell-item" @click="clickCell('swiper')">
                        <PictureOutlined class="icon" />
                        <span class="name">轮播图</span>
                    </div>
                    <div class="cell-item"  @click="clickCell('search')">
                        <SearchOutlined class="icon" />
                        <span class="name">搜索框</span>
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
