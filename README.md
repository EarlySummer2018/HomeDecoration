# 移动端首页装修

## 技术
[vue 3.2.47](https://github.com/vuejs/core)

[pinia 2.1.3](https://github.com/vuejs/pinia)

[ant-design-vue 3.2.20](https://github.com/vueComponent/ant-design-vue)

[TypeScript 5.0.2](https://github.com/microsoft/TypeScript)


## 安装与使用
### 使用 git clone 项目到本地
```bash
$ git clone https://github.com/EarlySummer2018/HomeDecoration.git
```

### 使用 npm、yarn 或 pnpm 安装
```bash
$ pnpm install
```
### 运行
```bash
$ pnpm run dev
```

## 生态

| Project | Description |
| --- | --- |
| [ant-design/icons-vue](https://3x.antdv.com/components/icon-cn) | 语义化的矢量图形。使用图标组件 |
| [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components) | 按需导入组件 |
| [vuedraggable](https://github.com/SortableJS/vue.draggable.next) | Vue 3 拖拽排序组件 |
| [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx) | vue3中使用 jsx/tsx语法 |

## 支持环境

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions

### 对于其他版本浏览器样式不兼容问题可参考，[ant-design-vue 3.2.20 常见问题](https://3x.antdv.com/docs/vue/faq-cn)

## 功能目录
✅：支持，❌：暂不支持，⭕️：待完善，☑️：待开发
<br />

✅ 模块可拖拽排序

✅ 模块增删改查

✅ [搜索模块](./src/components/homeTemplate/module/editor/search/README.md)

+ ✅ 修改搜索框 `placeholder`
+ ✅ 修改输入框圆角样式
+ ✅ 修改文字对齐方式

✅ [轮播图模块](./src/components/homeTemplate/module/editor/swiper/README.md)

+ ✅ 每张添加标题，自动显示隐藏，有输入标题就显示，没输入标题就隐藏

   + ✅ 自定义标题位置，暂支持 `top` 和 `bottom`
   + ✅ 自定义标题颜色
   + ✅ 标题背景色支持 `纯色` 和 `线性渐变` 两种模式
   + ✅ 自定义标题背景色

+ ✅ 上传轮播图
+ ✅ 每张可拖拽排序
+ ✅ 自定义切换时间
+ ✅ 自定义指示器大小
+ ✅ 自定义指示器默认颜色
+ ✅ 自定义指示器激活颜色
+ ✅ 自定义指示器位置，暂支持 `left`、`right` 和 `center` 三个位置
+ ✅ 选择每张轮播图跳转链接（[链接选择组件](/src/components/SelectLinkModel/README.md)）
+ ✅ 支持拖拽排序

☑️ 图片热区

☑️ 图片橱窗

☑️ 单图

☑️ 文章

☑️ 视频

✅ [头条](./src/components/homeTemplate/module/editor/news/README.md)

+ ✅ 支持添加跳转链接
+ ✅ 自定义文字颜色、文字大小
+ ✅ 自定义背景颜色
+ ✅ 自定义上下边距
+ ✅ 支持自定义头条来源
+ ✅ 自定义头条个数

✅ [导航](./src/components/homeTemplate/module/editor/navigation/README.md)

+ ✅ 支持添加跳转链接
+ ✅ 支持设置每行个数，支持：`3 / 4 / 5`
+ ✅ 自定义导航名称
+ ✅ 自定义背景颜色
+ ✅ 自定义文字颜色
+ ✅ 自定义上下边距
+ ✅ 支持拖拽排序

✅ [公告](./src/components/homeTemplate/module/editor/bulletin/README.md)

+ ✅ 支持添加跳转链接
+ ✅ 自定义文字颜色、文字大小
+ ✅ 自定义背景颜色
+ ✅ 自定义上下边距

✅ [客服](./src/components/homeTemplate/module/editor/customerService/README.md)

+ ✅ 支持 `在线客服` 和 `拨打电话` 两种模式
+ ✅ 自定义客服图标
+ ✅ 支持透明度、底边距、右边距

☑️ 商品

☑️ 优惠券

☑️ 砍价商品

☑️ 秒杀商品

☑️ 拼团商品

✅ [空白填充](./src/components/homeTemplate/module/editor/blanks/README.md)

+ ✅ 自定义高度
+ ✅ 自定义颜色

✅ [辅助线](./src/components/homeTemplate/module/editor/polyline/README.md)

+ ✅ 自定义线条样式，暂支持 `solid（实线）`、`dashed（虚线）` 和 `dotted（点状）`
+ ✅ 自定义线条高度
+ ✅ 可添加上下边距
+ ✅ 自定义线条颜色
+ ✅ 自定义上下边距背景色

✅ [备案号](./src/components/homeTemplate/module/editor/fileNumber/README.md)

+ ✅ 自定义文字大小
+ ✅ 自定义对齐方式
+ ✅ 自定义文字颜色
+ ✅ 自定义容器上下边距
+ ✅ 自定义容器左右边距
+ ✅ 自定义容器背景颜色

✅ [微信公众号](./src/components/homeTemplate/module/editor/wexinOfficial/README.md)


## 提交类型

- ✨：新功能（feature）
- 🐛：修复（fix）
- 📝：文档（documentation）
- 🎉：优化（refactor）
- 📏：格式（不影响代码运行的变动）


## 其他
样式参考：[萤火商城](https://gitee.com/xany)
