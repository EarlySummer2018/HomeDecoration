import { defineStore } from "pinia";
type Align = 'left' | 'center' | 'right'
type Style = 'square' | 'round' | 'circular'
interface State {
    placeholder: string,
    textAlign: Align,
    style: Style,
    containerBgColor: string,
    searchBgColor: string
}
export default defineStore("useSearch", {
  state: ():State => ({
    placeholder: '请输入关键词进行搜索',
    textAlign: 'left',
    style: 'square',
    containerBgColor: '#f1f1f2',
    searchBgColor: '#fff'
  }),
  actions: {
    setPlaceholder(val:string) {
        this.placeholder = val
    },
    setTextAlign(align: Align) {
        this.textAlign = align
    },
    setStyle(style:Style) {
        this.style = style
    },
    setContainerBgColor(color:string) {
        this.containerBgColor = color
    },
    setSearchBgColor(color:string) {
        this.searchBgColor = color
    }
  },
  getters: {
    pl: state => state.placeholder,
    ta: state => state.textAlign,
    sl: state => state.style,
    cbg: state => state.containerBgColor,
    sbg: state => state.searchBgColor
  }
});
