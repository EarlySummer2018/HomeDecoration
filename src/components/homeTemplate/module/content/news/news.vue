<script lang="ts" setup>
import { SendOutlined, RightOutlined } from "@ant-design/icons-vue";
import { useTemplate } from "@/store";
const props = defineProps<{ id: string; data: any }>();
const templateStore = useTemplate();
</script>
<template>
  <div
    class="news move"
    data-type="news"
    :id="`cx-${props.id}`"
    :class="{ active: templateStore.id === id }"
    :style="{
      padding: `${data.style.margin}px 0`,
      backgroundColor: data.style.bgColor,
    }"
  >
    <a-carousel
      class="news"
      dot-position="right"
      :autoplay="true"
      :dots="false"
    >
      <div class="content-box" v-for="item in data.value" :key="item.id">
        <div
          class="content"
          :style="{
            color: data.style.textColor,
            fontSize: `${data.style.fontSize}px`,
          }"
        >
          <SendOutlined
            :style="{
              fontSize: data.style.fontSize,
            }"
          />
          <span class="txt">{{ item.content }}</span>
        </div>
        <RightOutlined
          :style="{
            fontSize: data.style.fontSize,
            color: data.style.textColor,
          }"
        />
      </div>
    </a-carousel>
  </div>
</template>
<style lang="scss" scoped>
.news {
  width: 100%;

  .content-box {
    padding: 6px 10px;
    height: 32px;
    display: inline-flex !important;
    align-items: center;
    justify-content: space-between;
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
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
