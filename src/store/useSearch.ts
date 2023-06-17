import { defineStore } from "pinia";
type Align = 'left' | 'center' | 'right'
type Style = 'square' | 'round' | 'circular'
interface State {
    search: {
      placeholder: string,
      textAlign: Align,
      style: Style,
      containerBgColor: string,
      searchBgColor: string
    }
}
export default defineStore("useSearch", {
  state: ():State => ({
    search: {
      placeholder: '请输入关键词进行搜索',
      textAlign: 'left',
      style: 'square',
      containerBgColor: '#f1f1f2',
      searchBgColor: '#fff'
    }
  }),
  actions: {
    setSearch(val:any) {
      this.search = val
    },
    setPlaceholder(val:string) {
        this.search.placeholder = val
    },
    setTextAlign(align: Align) {
        this.search.textAlign = align
    },
    setStyle(style:Style) {
        this.search.style = style
    },
    setContainerBgColor(color:string) {
        this.search.containerBgColor = color
    },
    setSearchBgColor(color:string) {
        this.search.searchBgColor = color
    }
  },
  getters: {
    placeholder: state => state.search.placeholder,
    textAlign: state => state.search.textAlign,
    style: state => state.search.style,
    containerBgColor: state => state.search.containerBgColor,
    searchBgColor: state => state.search.searchBgColor,
  }
});
