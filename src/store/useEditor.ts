import { defineStore } from "pinia";

export default defineStore("useEditor", {
  state: () => ({
    currentEditor: "",
    header: {
        pageName: '首页',
        shareTitle: '首页',
        title: '标题',
        textColor: 'black',
        titleBarBgColor: '#ffffff'
    }
  }),
  actions: {
    changeEditor(type: string) {
      this.currentEditor = type;
    },
  },
  getters: {
    headerEditor: state => state.header
  }
});
