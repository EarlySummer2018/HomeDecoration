<script lang="ts" setup>
import {
  WechatOutlined,
} from "@ant-design/icons-vue";
import { useTemplate } from "@/store";
const props = defineProps<{ id: string }>();
const templateStore = useTemplate();
</script>
<template>
  <div
    class="weixin-official-content move"
    data-type="weixinOfficial"
    :id="`cx-${props.id}`"
    :class="{ active: templateStore.id === id }"
  >
    <div class="title">关联的公众号</div>
    <div class="info">
      <div class="avatar">
        <a-avatar :size="40">
          <template #icon><WechatOutlined /></template>
        </a-avatar>
      </div>
      <div class="name-desc">
        <div class="name">公众号名称</div>
        <div class="desc">公众号简介</div>
      </div>
    </div>
    <div class="btn">关注</div>
  </div>
</template>
<style lang="scss">
.weixin-official-content {
  position: relative;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  padding: 0 5px;
  color: #c0bdc0;
  .title {
    padding: 5px 0;
    font-size: 12px;
  }
  .info {
    display: flex;
    align-items: center;
    .avatar {
      min-width: 40px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .name-desc {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      color: #9e9b9f;
      margin-left: 10px;
      .name {
        font-size: 14px;
        color: black;
      }
    }
  }
  .btn {
      position: absolute;
      top: 50%;
      right: 10px;
      padding: 2px 10px;
      border-radius: 2px;
      color: #008dff;
      font-size: 12px;
      border: 1px solid #008dff;
      transform: translateY(-50%);
    }
}
</style>
