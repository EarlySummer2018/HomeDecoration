<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Card from "@/components/card/card";
interface Props {
  cTab?: string,
  cTitle?: string,
  sTab?: string,
  sTitle?: string,
  showContent?: boolean,
  showStyle?: boolean,
  isHideHeader?: boolean
}
const activeKey = ref<number | string>(1);
const props = withDefaults(defineProps<Props>(), {
  cTab: '内容设置',
  cTitle: '内容设置',
  sTab: '样式设置',
  sTitle: '样式设置',
  showContent: true,
  showStyle: true,
  isHideHeader: false
})
onMounted(()=>{
  if (props.showContent) {
    activeKey.value = 1
  }else{
    activeKey.value = 2
  }
})
</script>
<template>
  <div class="tabs-card">
    <a-tabs v-model:activeKey="activeKey" animated centered>
      <a-tab-pane :key="1" :tab="props.cTab" v-if="showContent">
        <Card :title="props.cTitle" v-bind="$attrs">
          <slot name="content"></slot>
        </Card>
      </a-tab-pane>
      <a-tab-pane :key="2" :tab="props.sTab" v-if="showStyle">
        <Card :title="props.sTitle" v-bind="$attrs">
          <slot name="style"></slot>
        </Card>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style lang="scss">
.tabs-card {
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
  .ant-tabs-nav-wrap {
    display: v-bind('props.isHideHeader?"none":"inline-block"') !important;
  }
}
</style>
