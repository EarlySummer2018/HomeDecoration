<script lang="ts" setup>
import { ref } from "vue";
import draggable from "vuedraggable";
import { PlusOutlined } from "@ant-design/icons-vue";
import tabCard from "@/components/tabsCard/tabCard.vue";
import SelectLinkModel from "@/components/SelectLinkModel";
import guid from "@/utils/guid";
import deepClone from "@/utils/deepClone";
import useNavigation from "@/hooks/useNavigation";
const { data, style, options } = useNavigation();
const drag = ref<boolean>(false)
const delNavigation = (id: string) => {
  const index = data.value.findIndex((el: any) => el.id === id);
  data.value.splice(index, 1)
};
const addNavigation = () => {
  data.value.push({
    id: guid(),
    src: '',
    text: '',
    link: {}
  })
}

const linkVisible = ref<boolean>(false);
const currentLinkId = ref<string>("");
const currentId = ref<string>("");
const currentLinkForm = ref<InsideLinks>();
const openSelectLink = (item: any) => {
  currentId.value = item.id;
  linkVisible.value = true;
  currentLinkId.value = item.link?.id as string;
  currentLinkForm.value = deepClone(item.link);
};
const confirmSelectLink = (link: any) => {
  const index = data.value.findIndex(
    (el: any) => el.id === currentId.value
  );
  if (~index) {
    data.value[index].link = link;
  }
}
const closeModal = () => {
  currentId.value = "";
  currentLinkForm.value = {} as InsideLinks;
}
</script>
<template>
  <div class="navigation-edtior">
    <tabCard>
      <template #content>
        <draggable
          v-model="data.value"
          item-key="id"
          v-bind="{ animation: 120 }"
          class="navigation-item-box"
          :component-data="{
            tag: 'div',
            type: 'transition-group',
            name: !drag ? 'flip-list' : null,
          }"
          @start="drag = true"
          @end="drag = false"
        >
          <template #item="{ element }">
            <div class="navigation-item">
              <p class="item-title">
                <span>导航</span>
                <a-button
                  type="link"
                  danger
                  size="mini"
                  style="padding: 0"
                  @click="delNavigation(element.id)"
                  >删除</a-button
                >
              </p>
              <div class="editor-cell">
                <span class="label">导航名称</span>
                <a-input
                  v-model:value="element.text"
                  placeholder="请输入导航名称"
                />
              </div>
              <div class="editor-cell">
                <span class="label">图片</span>
                <a-upload
                  name="navigation"
                  class="navigation-uploader"
                  :show-upload-list="false"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                >
                  <img v-if="element.path" :src="element.path" alt="navigation" />
                  <div v-else>
                    <plus-outlined></plus-outlined>
                  </div>
                </a-upload>
              </div>
              <div class="editor-cell" style="margin-bottom: 0">
                <span class="label">跳转链接 {{ element.link?.linkName }}</span>
                <a-button
                  type="link"
                  @click="openSelectLink(element)"
                  size="mini"
                  style="padding: 0"
                  >{{ element.link?.linkName ? "修改" : "选择链接" }}</a-button
                >
              </div>
            </div>
          </template>
        </draggable>

        <a-button class="add-btn" @click="addNavigation()">
          <plus-outlined></plus-outlined>
          <span>添加导航</span>
        </a-button>
      </template>
      <template #style>
        <div class="style">
          <div class="editor-cell">
            <span class="label">每行数量</span>
            <a-radio-group v-model:value="options.colNum" button-style="solid">
              <a-radio-button :value="3">3</a-radio-button>
              <a-radio-button :value="4">4</a-radio-button>
              <a-radio-button :value="5">5</a-radio-button>
            </a-radio-group>
          </div>
          <div class="editor-cell">
            <span class="label">文字颜色</span>
            <input v-model="style.textColor" type="color" />
          </div>
          <div class="editor-cell">
            <span class="label">上下边距</span>
            <div class="item-slider" style="width: 190px">
              <a-slider
                v-model:value="style.py"
                :step="1"
                :min="0"
                :max="50"
              />
              <span class="unit-text">
                <span>{{ style.py }}</span>
                <span>像素</span>
              </span>
            </div>
          </div>
          <div class="editor-cell">
            <span class="label">背景色</span>
            <div>
              <input type="color" v-model="style.bgColor" />
            </div>
          </div>
        </div>
      </template>
    </tabCard>
  </div>
  <SelectLinkModel
    v-model:visible="linkVisible"
    :linkId="currentLinkId"
    :linkForm="currentLinkForm"
    @confirm="confirmSelectLink"
    @close="closeModal"
  />
</template>
<style lang="scss">
.navigation-edtior {
  .add-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navigation-item {
    background-color: #f0f2f5;
    padding: 12px 11px;
    margin-bottom: 10px;
    border-radius: 4px;
    cursor: move;

    .item-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .img {
      width: 322px;
      height: 172px;
      object-fit: cover;
    }

    .navigation-uploader {
      width: 60px;
      height: 60px;
      border: 1px dashed #d9d9d9;
      border-radius: 2px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
