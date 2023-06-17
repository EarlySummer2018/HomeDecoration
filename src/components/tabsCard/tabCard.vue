<script lang="ts" setup>
import { ref } from "vue";
import Card from "@/components/card/card";
interface Props {
  cTab?: string,
  cTitle?: string,
  sTab?: string,
  sTitle?: string
}
const activeKey = ref<number | string>(1);
const props = withDefaults(defineProps<Props>(), {
  cTab: '内容设置',
  cTitle: '内容设置',
  sTab: '样式设置',
  sTitle: '样式设置'
})
</script>
<template>
  <div class="tabs-card">
    <a-tabs v-model:activeKey="activeKey" animated centered>
      <a-tab-pane :key="1" :tab="props.cTab">
        <Card :title="props.cTitle">
          <slot name="content"></slot>
        </Card>
      </a-tab-pane>
      <a-tab-pane :key="2" :tab="props.sTab">
        <Card :title="props.sTitle">
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
}
</style>
