<script lang="ts" setup>
import { ref, computed, onMounted, reactive, watch, nextTick } from "vue";
import draggable from "vuedraggable";
import { useTemplate, useEditor } from "@/store";
import {
  getComponent,
  
  whiteBgImg,
} from "./content";
const drag = ref<boolean>(false);
const phoneContentHeaderBgColor = ref<string>("#fff");
const templateStore = useTemplate();
const contentList = computed({
  get: () => {
    return templateStore.list;
  },
  set: (val) => {
    templateStore.updateModuleList(val);
  },
});
const { headerEditor } = useEditor();
const delStyle = reactive({
  top: "0px",
  left: "373px",
  width: "34px",
  transform: "translate(-100%, -100%)",
});
const contentBox = ref<HTMLElement | null>(null);
const changeCurrent = (e: Event) => {
  const target = e.target as HTMLElement;
  const type = target.dataset.type;
  const id = target.id.slice(3);
  if (type && id) {
    templateStore.changeCurrent(id, type);
    const val = templateStore.list.filter((el: any) => el.id === id);
    templateStore.setCurrentHandlerObject(val[0]);
  }
};

const setDelBtnStyle = (el: HTMLElement) => {
  const elRect: DOMRect = el.getBoundingClientRect() as DOMRect;
  const top: number = elRect.top;
  const contentBoxRect: DOMRect =
    contentBox.value?.getBoundingClientRect() as DOMRect;
  const scrollTop: number = contentBox.value?.scrollTop as number;
  
  delStyle.top =
    top - contentBoxRect.top + scrollTop + elRect.height - 2 + "px";
  delStyle.left = elRect.left - contentBoxRect.left + elRect.width - 2 + 'px'
};

const titleStyle = computed(() => {
  return {
    color: headerEditor.textColor,
    backgroundColor: headerEditor.titleBarBgColor,
    backgroundImage:
      headerEditor.textColor === "white" ? `url(${whiteBgImg})` : "",
  };
});

const draggableEnd = () => {
  const el: HTMLElement = document.querySelector(".move.active") as HTMLElement;
  if (el) {
    setDelBtnStyle(el);
  }
  drag.value = false;
};

watch(
  () => templateStore.currentHanderObject,
  async (nVal) => {
    if (!nVal) return;
    await nextTick();
    const element = document.querySelector(`#cx-${nVal.id}`) as HTMLElement;
    setDelBtnStyle(element);
  },
  {deep:true}
)

onMounted(() => {
  contentBox.value = document.querySelector(".content-module") as HTMLElement;
});
</script>

<template>
  <section class="content-module" @click="changeCurrent">
    <div
      class="header move"
      data-type="header"
      id="cx-header"
      :class="{ active: templateStore.id === 'header' }"
      :style="titleStyle"
    >
      {{ headerEditor.title }}
    </div>
    <draggable
      v-model="contentList"
      item-key="id"
      v-bind="{ animation: 120 }"
      class="list-group"
      :component-data="{
        tag: 'div',
        type: 'transition-group',
        name: !drag ? 'flip-list' : null,
      }"
      @start="drag = true"
      @end="draggableEnd"
    >
      <template #item="{ element }">
        <component
          :is="getComponent(element.type)"
          v-bind="element"
        />
      </template>
    </draggable>
    <div
      v-if="templateStore.id && templateStore.id !== 'header'"
      class="del-btn1"
      :style="delStyle"
      @click="templateStore.deleteModule()"
    >
      删除
    </div>
  </section>
</template>

<style lang="scss">
.module-move,
/* 对移动中的元素应用的过渡 */
.module-enter-active,
.module-leave-active {
  transition: all 0.2s ease;
}

.module-enter-from,
.module-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.module-leave-active {
  position: absolute;
}

.content-module {
  position: relative;
  background-color: #fafafa;
  min-height: 648px;
  position: relative;
  min-width: 375px;
  overflow-x: hidden;
  width: 375px;
  max-height: 648px;
  box-shadow: 0 0 28px 0 #ccc;
  margin-top: 25px;
  background-color: #fff;
  .del-btn1 {
    height: 16px;
    line-height: 16px;
    position: absolute;
    text-align: center;
    font-size: 12px;
    padding: 0 5px;
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    pointer-events: auto !important;
    z-index: 90;
  }

  .header {
    position: sticky;
    top: 0;
    left: 0;
    height: 66px;
    width: 100%;
    background-color: v-bind("phoneContentHeaderBgColor");
    background-size: 100%;
    background-image: url("@/assets/phone-top-black.79cd4211.png");
    z-index: 9;
    display: flex;
    justify-content: center;
    padding-top: 30px;
  }
}
</style>
