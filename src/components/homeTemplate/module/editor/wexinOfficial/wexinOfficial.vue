<script lang="ts" setup>
import tabCard from "@/components/tabsCard/tabCard.vue";
</script>
<template>
  <div class="weixin-official-editor">
    <tabCard s-title="" :showContent="false" :isHideHeader="true">
      <template #style>
        <p>1、该组件仅支持微信小程序端，其他端不显示</p>
        <p>2、使用组件前，需前往 
          <a href="https://mp.weixin.qq.com" target="_blank" rel="noopener noreferrer">小程序后台</a>
          ，在“设置”->“接口设置”->“公众号关注组件”中设置要展示的公众号。 
        </p>
        <p>注：设置的公众号需与小程序主体一致。</p>
        <p>3、当小程序从扫二维码场景（场景值1011）打开时，才具有展示引导关注公众号组件的能力。</p>
      </template>
    </tabCard>
  </div>
</template>
