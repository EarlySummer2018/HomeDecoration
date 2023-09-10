<script lang="ts" setup>
import { SoundOutlined } from "@ant-design/icons-vue";
import { useTemplate } from "@/store";
const props = defineProps<{ id: string; data: any }>();
const templateStore = useTemplate();
</script>
<template>
  <div
    class="bulletin move"
    data-type="bulletin"
    :id="`cx-${props.id}`"
    :class="{ active: templateStore.id === id }"
    :style="{
      padding: `${data.style.margin}px 0`,
    }"
  >
    <div
      class="content"
      :style="{
        backgroundColor: data.style.bgColor,
        color: data.style.textColor,
        fontSize: `${data.style.fontSize}px`,
      }"
    >
      <SoundOutlined
        :style="{
          fontSize: data.style.fontSize,
        }"
      />
      <span class="txt">{{ data.value.content }}</span>
    </div>
  </div>
</template>
<style lang="scss">
.bulletin {
  width: 100%;
  background-color: #ffffff;

  .content {
    padding: 6px 10px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
</style>
