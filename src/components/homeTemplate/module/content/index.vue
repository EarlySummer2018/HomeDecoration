<script lang="ts" setup>
import { ref, computed } from "vue";
import draggable from "vuedraggable";
import { useTemplate, useEditor } from "@/store";
import Swiper from "./swiper/swiper.vue";
import Search from "./search/search.vue";
import whiteBgImg from "@/assets/phone-top-white.b2d6121b.png";
const drag = ref<boolean>(false);
const phoneContentHeaderBgColor = ref<string>("#fff");
const templateStore = useTemplate();
const contentList = computed({
  get: () => {
    return templateStore.list
  },
  set: (val) => {
    templateStore.updateModuleList(val)
  }
});
const { headerEditor } = useEditor();
const changeCurrent = (e: Event) => {
  const type = (e.target as any).dataset?.type;
  const id = (e.target as any).dataset?.id;
  if (type && id) {
    templateStore.changeCurrent(id, type);
    const val = templateStore.list.filter((el: any) => el.id === id);
    templateStore.setCurrentHandlerObject(val[0])
  }
};

const titleStyle = computed(() => {
  return {
    color: headerEditor.textColor,
    backgroundColor: headerEditor.titleBarBgColor,
    backgroundImage:
      headerEditor.textColor === "white" ? `url(${whiteBgImg})` : "",
  };
});
</script>

<template>
  <section class="content-module" @click="changeCurrent">
    <div
      class="header move"
      data-type="header"
      data-id="header"
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
      @end="drag = false"
    >
      <template #item="{ element }">
        <Search
          v-if="element.type === 'search'"
          :id="element.id"
          :type="element.type"
          :value="element.value"
        ></Search>
        <swiper
          v-else-if="element.type === 'swiper'"
          :id="element.id"
          :type="element.type"
          :swiper="element.value"
          :options="element.options"
        >
        </swiper>
      </template>
    </draggable>
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
