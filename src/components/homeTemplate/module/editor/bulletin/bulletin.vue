<script lang="ts" setup>
import {ref} from 'vue';
import tabCard from "@/components/tabsCard/tabCard.vue";
import SelectLinkModel from "@/components/SelectLinkModel";
import useBulletin from "@/hooks/useBulletin";
import deepClone from '@/utils/deepClone';
const { bulletinStyle } = useBulletin();

const linkVisible = ref<boolean>(false)
const linkId = ref<string>('')
const linkForm = ref<InsideLinks|undefined>(undefined)
const openSelectLink = () => {
  linkId.value = bulletinStyle.value.link.id
  linkForm.value = deepClone(bulletinStyle.value.link)
  linkVisible.value = true
}
const confirmSelectLink = (link:any) => {
  bulletinStyle.value.link = link
}
const closeLinkModel = () => {
  linkId.value = ''
  linkForm.value = {} as InsideLinks
}
</script>
<template>
  <div class="banks-editor">
    <tabCard>
      <template #content>
        <div class="editor-cell">
          <span class="label">内容</span>
          <a-input
            v-model:value.tirm="bulletinStyle.content"
            placeholder="请输入内容"
          />
        </div>
        <div class="cell link-cell" style="margin-bottom: 0">
          <span class="label">跳转链接 {{ bulletinStyle.link?.linkName }}</span>
          <a-button
            type="link"
            @click="openSelectLink()"
            size="mini"
            style="padding: 0"
            >{{ bulletinStyle.link?.linkName ? "修改" : "选择链接" }}</a-button
          >
        </div>
      </template>
      <template #style>
        <div class="editor-cell">
          <span class="label">文字大小</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="bulletinStyle.fontSize"
              :step="1"
              :min="12"
              :max="24"
            />
            <span class="unit-text">
              <span>{{ bulletinStyle.fontSize }}</span>
              <span>像素</span>
            </span>
          </div>
        </div>
        <div class="editor-cell">
          <span class="label">文字颜色</span>
          <input v-model="bulletinStyle.textColor" type="color" />
        </div>
        <div class="editor-cell">
          <span class="label">上下边距</span>
          <div class="item-slider" style="width: 190px">
            <a-slider
              v-model:value="bulletinStyle.margin"
              :step="1"
              :min="0"
              :max="50"
            />
            <span class="unit-text">
              <span>{{ bulletinStyle.margin }}</span>
              <span>像素</span>
            </span>
          </div>
        </div>
        <div class="editor-cell">
          <span class="label">背景颜色</span>
          <input v-model="bulletinStyle.bgColor" type="color" />
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
