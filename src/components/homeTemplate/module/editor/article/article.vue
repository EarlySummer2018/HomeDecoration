<script lang="ts" setup>
import tabCard from "@/components/tabsCard/tabCard.vue";
import { selectOptions } from "./data";
import useArticle from "@/hooks/useArticle";
const { options } = useArticle();
</script>
<template>
  <div class="banks-editor">
    <tabCard :showContent="false" :isHideHeader="true" s-title="内容设置">
      <template #style>
        <div class="editor-cell">
          <span class="label">文章分类</span>
          <a-select
            ref="select"
            v-model:value="options.cate"
            style="width: 220px"
          >
            <a-select-option
              v-for="option in selectOptions"
              :value="option.value"
              >{{ option.label }}</a-select-option
            >
          </a-select>
        </div>
        <div class="editor-cell mb0">
          <span class="label">显示数量</span>
          <a-input-number
            id="inputNumber"
            v-model:value="options.num"
            :min="1"
          />
        </div>
      </template>
    </tabCard>
  </div>
</template>
