<script lang="ts" setup>
import { nextTick, reactive, ref } from "vue";
import { LoadingOutlined } from "@ant-design/icons-vue";
import {
  type DrawerParams,
  type InsideLinks,
  type LinkForm,
  outerLinks,
  insideLinksGroup,
  groupKeys,
} from "./linkData";
import { isEmpty } from "@/utils/utils";
import guid from "@/utils/guid";
import deepClone from "@/utils/deepClone";
defineProps({
  visible: Boolean,
});
const emit = defineEmits(["update:visible"]);
const selectLinkId = ref<string>("");
const errMsg = ref<string>("");
const isLoading = ref<boolean>(false);
const activeKey = ref<"inside" | "outer">("inside");
const outerLinkPrefix = ref<"https://" | "http://">("https://");
const inputOuterLinkName = ref<string>("");
const inputOuterLink = ref<string>("");

const createOuterLink = () => {
  console.log(
    outerLinkPrefix.value,
    inputOuterLinkName.value,
    inputOuterLink.value
  );
  if (isEmpty(inputOuterLinkName.value)) {
    errMsg.value = "请输入链接名称";
    return;
  }
  if (isEmpty(inputOuterLink.value)) {
    errMsg.value = "请输入链接地址";
    return;
  }
  errMsg.value = "";
  isLoading.value = true;
  setTimeout(() => {
    const id = guid();
    selectLinkId.value = id;
    outerLinks.value.push({
      id,
      linkName: inputOuterLinkName.value,
      linkUrl: outerLinkPrefix.value + inputOuterLink.value,
    });
    isLoading.value = false;
    inputOuterLink.value = "";
    inputOuterLinkName.value = "";
  }, 2500);
};

const selectOuterLink = (e: Event) => {
  const target = e.target as HTMLElement;
  if (target.className === "link-item") {
    const index = Number(target.dataset.index);
    selectLinkId.value = outerLinks.value[index].id;
  }
};

const curLinkItem = ref<Partial<InsideLinks>>({});
const linkFormData = reactive<{ form: LinkForm[] }>({
  form: [],
});
const drawerIsCallabck = ref<boolean>(false);
const handleClickItem = async (item: InsideLinks) => {
  curLinkItem.value = item;
  selectLinkId.value = item.id;
  if (item.form) {
    linkFormData.form = deepClone(item.form);
    await nextTick()
    drawer.visible = true;
  }
};

const drawer = reactive<DrawerParams>({
  title: "",
  visible: false,
});

const closeDrawer = () => {
  if (!drawerIsCallabck.value) {
    selectLinkId.value = "";
  }
  drawer.visible = false;
};

const linkFormRef = ref<HTMLElement | null>(null);
const onFinish = (values: any) => {
  console.log("Received values of form:", values);
  console.log("dynamicValidateForm:", curLinkItem.value.form);
};

const handleOk = () => {
  emit("update:visible", false);
};
</script>
<template>
  <a-modal
    wrapClassName="link-modal"
    :visible="visible"
    width="860px"
    title="选择链接"
    :maskClosable="false"
    cancelText="取消"
    okText="确认"
    @ok="handleOk"
    @cancel="emit('update:visible', false)"
  >
    <div class="link-modal-body">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="inside" tab="内部链接">
          <a-collapse
            :defaultActiveKey="groupKeys"
            :bordered="false"
            expandIconPosition="left"
          >
            <a-collapse-panel
              v-for="group in insideLinksGroup"
              :key="group.id"
              :header="group.title"
            >
              <div class="link-list">
                <div
                  v-for="(item, index) in group.data"
                  :key="index"
                  class="link-item"
                  :class="{ active: selectLinkId == item.id }"
                  @click="handleClickItem(item)"
                >
                  <span class="link-title">{{ item.linkName }}</span>
                </div>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </a-tab-pane>
        <a-tab-pane
          key="outer"
          tab="外部链接(小程序端需配置业务域名)"
          force-render
        >
          <div class="input-outer-link-box">
            <a-input
              v-model:value="inputOuterLinkName"
              :disabled="isLoading"
              placeholder="请输入链接名称"
              style="width: 130px"
              @pressEnter="createOuterLink()"
            ></a-input>
            <a-input
              v-model:value="inputOuterLink"
              :disabled="isLoading"
              placeholder="请输入外部链接"
              @pressEnter="createOuterLink()"
            >
              <template #addonBefore>
                <a-select
                  v-model:value="outerLinkPrefix"
                  :disabled="isLoading"
                  style="width: 90px"
                >
                  <a-select-option value="http://">http://</a-select-option>
                  <a-select-option value="https://">https://</a-select-option>
                </a-select>
              </template>
            </a-input>
            <loading-outlined style="margin-left: 5px" v-if="isLoading" />
            <span style="color: #ccc; font-size: 12px; margin-left: 5px"
              >(回车自动创建)</span
            >
            <p class="errMsg" v-if="errMsg.length">{{ errMsg }}</p>
          </div>
          <div class="link-list" @click="selectOuterLink">
            <div
              class="link-item"
              :class="{ active: item.id === selectLinkId }"
              v-for="(item, index) in outerLinks"
              :data-index="index"
              :key="index"
            >
              {{ item.linkName }}
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
      <a-drawer
        :title="drawer.title"
        placement="right"
        :width="350"
        :closable="false"
        :visible="drawer.visible"
        :getContainer="false"
        :style="{ position: 'absolute' }"
        @close="closeDrawer()"
      >
        <a-form
          ref="linkFormRef"
          :model="linkFormData"
          @finish="onFinish"
        >
        {{ linkFormData.form.length }}
          <a-form-item
            v-for="(item, index) in linkFormData.form"
            :key="index"
            :name="['form', index, 'value']"
            :label="item.label"
            :rules="{
              required: item.required,
              message: `${item.label}必填`,
            }"
          >
            <a-input
              v-model:value="item.value"
              :placeholder="'请输入' + item.label"
            />
          </a-form-item>
        </a-form>
      </a-drawer>
    </div>
  </a-modal>
</template>
<style lang="scss" scoped>
.link-modal-body {
  position: relative;
  min-height: 360px;
  overflow: hidden;
}
.link-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .link-item {
    padding: 5px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 20px;
    margin-bottom: 15px;
    font-size: 12.5px;
    cursor: pointer;
    &:hover {
      border: 1px solid #1890ff;
      color: #1890ff;
    }
    &.active {
      background: #1890ff;
      border-color: #1890ff;
      color: #fff;
    }
    &:last-child {
      margin-right: auto;
    }
  }
}
.input-outer-link-box {
  position: relative;
  display: inline-flex;
  align-items: flex-end;
  padding-bottom: 25px;
  .errMsg {
    position: absolute;
    left: 0;
    bottom: 5px;
    color: red;
    font-size: 12px;
    margin: 0;
  }

  :deep(.ant-input-group-wrapper) {
    width: auto;
  }
}
:deep(.ant-collapse-header) {
  padding: 14px 16px;
  font-size: 13px;
  font-weight: 700;
  color: #595961;
}
:deep(.ant-collapse-content-box) {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

:deep(.ant-collapse > .ant-collapse-item) {
  border-bottom: none;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
}
:deep(.ant-collapse-item) {
  margin-bottom: 0 !important;
}
</style>
