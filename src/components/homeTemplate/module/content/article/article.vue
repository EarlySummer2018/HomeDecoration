<script lang="ts" setup>
import { EyeOutlined } from "@ant-design/icons-vue";
import errImg from "@/utils/loadErrorImg";
import { useTemplate } from "@/store";
const props = defineProps<{ id: string; data: any }>();
const templateStore = useTemplate();
</script>
<template>
  <div
    class="article move"
    data-type="article"
    :id="`cx-${props.id}`"
    :class="{ active: templateStore.id === id }"
  >
    <div class="article-item">
      <div class="left">
        <p>我是标题</p>
        <p class="desc">
          <EyeOutlined style="font-size: 12px; margin-right: 5px" />
          <span>21312次预览</span>
        </p>
      </div>
      <div class="right">
        <a-image
          style="width: 100px; height: 60px"
          src="https://www.antdv.com/#error"
          :fallback="errImg"
        />
      </div>
    </div>
    <div class="article-item">
      <div class="left">
        <p>我是标题</p>
        <p class="desc">
          <EyeOutlined style="font-size: 12px; margin-right: 5px" />
          <span>21312次预览</span>
        </p>
      </div>
      <div class="right">
        <a-image
          style="width: 100px; height: 60px"
          src="https://www.antdv.com/#error"
          :fallback="errImg"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.article {
  width: 100%;
  background-color: #f7f7f7;
  &-item {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;

    .left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: #333;
      justify-content: space-between;
      margin-right: 10px;
      .desc {
        color: #888;
      }
    }
    .right {
      width: 100px;
      height: 60px;
      min-width: 80px;
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
</style>
