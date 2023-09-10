<script lang="ts" setup>
import { ref, watch } from "vue";
import _ from "lodash";
import tabCard from "@/components/tabsCard/tabCard.vue";
import Card from "@/components/card/card";
import SelectLinkModel from "@/components/SelectLinkModel";
import useNews from "@/hooks/useNews";
import deepClone from "@/utils/deepClone";
import { selectOptions } from "./data";
import guid from "@/utils/guid";
const { data, style, options } = useNews();
const linkVisible = ref<boolean>(false);
const linkId = ref<string>("");
const linkForm = ref<InsideLinks | undefined>(undefined);

const openSelectLink = () => {
  linkId.value = options.link.id;
  linkForm.value = deepClone(options.link);
  linkVisible.value = true;
};
const confirmSelectLink = (link: any) => {
  options.link = link;
};
const closeLinkModel = () => {
  linkId.value = "";
  linkForm.value = {} as InsideLinks;
};

watch(
  () => options.showNum,
  (nVal) => {
    const changeValue = _.debounce(() => {
      let values: any[] | null = [];
      for (let i = 0; i < nVal; i++) {
        values.push({
          id: guid(),
          content: `我是头条组件${i + 1}`,
        });
      }
      data.value = deepClone(values);
      values = null;
    }, 500);
    changeValue();
  }
);
</script>
<template>
  <div class="banks-editor">
    <tabCard>
      <template #content>
        <div class="cell link-cell" style="margin-bottom: 0">
          <span class="label">跳转链接 {{ options.link?.linkName }}</span>
          <a-button
            type="link"
            @click="openSelectLink()"
            size="mini"
            style="padding: 0"
            >{{ options.link?.linkName ? "修改" : "选择链接" }}</a-button
          >
        </div>
      </template>
      <template #more-content>
        <Card title="数据来源">
          <div class="editor-cell">
            <span class="label">头条来源</span>
            <a-select
              ref="select"
              v-model:value="options.dataFrom"
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
              v-model:value="options.showNum"
              :min="1"
            />
          </div>
        </Card>
      </template>
      <template #style>
        <div class="editor-cell">
          <span class="label">文字大小</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="style.fontSize"
              :step="1"
              :min="12"
              :max="24"
            />
            <span class="unit-text">
              <span>{{ style.fontSize }}</span>
              <span>像素</span>
            </span>
          </div>
        </div>
        <div class="editor-cell">
          <span class="label">文字颜色</span>
          <input v-model="style.textColor" type="color" />
        </div>
        <div class="editor-cell">
          <span class="label">上下边距</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="style.margin"
              :step="1"
              :min="0"
              :max="50"
            />
            <span class="unit-text">
              <span>{{ style.margin }}</span>
              <span>像素</span>
            </span>
          </div>
        </div>
        <div class="editor-cell">
          <span class="label">背景颜色</span>
          <input v-model="style.bgColor" type="color" />
        </div>
      </template>
    </tabCard>
  </div>
  <SelectLinkModel
    v-model:visible="linkVisible"
    :linkId="linkId"
    :linkForm="linkForm"
    @confirm="confirmSelectLink"
    @close="closeLinkModel"
  />
</template>
