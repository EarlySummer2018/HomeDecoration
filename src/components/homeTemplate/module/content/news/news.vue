<script lang="ts" setup>
import { SendOutlined, RightOutlined } from "@ant-design/icons-vue";
import { useTemplate } from "@/store";
const props = defineProps<{ id: string; value: any }>();
const templateStore = useTemplate();
</script>
<template>
  <a-carousel dot-position="right" :autoplay="false" :dots="false">
    <div
      class="news move"
      data-type="news"
      :id="`cx-${props.id}`"
      :class="{ active: templateStore.id === id }"
      :style="{
        padding: `${value.margin}px 0`,
      }"
    >
      <div
        class="content"
        :style="{
          backgroundColor: value.bgColor,
          color: value.textColor,
          fontSize: `${value.fontSize}px`,
        }"
      >
        <div class="content">
          <SendOutlined
            :style="{
              fontSize: value.fontSize,
            }"
          />
          <span class="txt">{{ value.content }}</span>
        </div>
        <RightOutlined
          :style="{
            fontSize: value.fontSize,
          }"
        />
      </div>
    </div>
  </a-carousel>
</template>
<style lang="scss" scoped>
.news {
  width: 100%;
  background-color: #ffffff;

  .content {
    padding: 6px 10px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .txt {
    margin-left: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }
}
:deep(.slick-track) {
  height: auto !important;
}
</style>
