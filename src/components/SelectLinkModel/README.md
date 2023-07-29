## 选择链接弹窗组件

多个模块都需要支持选择跳转链接的功能，于是将选择跳转链接作为一个单独的弹窗组件进行使用

### 参数列表

| 参数名 | 类型 | 是否必填 | 默认值 | 可选值 |
| ----- | --- | ----- | ----- | ------ |
| visible | boolean | 是 | false | true |
| linkId | string | 否 | - | - |
| linkForm | [InsideLinks](/src/globals.d.ts) | 否 | - | - |

### 参数说明

**visible：** 必填，控制弹窗显示隐藏，用法 `v-model:visible`
```html
<SelectLinkModel v-model:visible="linkVisible" />
```
**linkId：** 非必填，用于默认选中，常用于编辑回填
```html
<SelectLinkModel v-model:visible="linkVisible" :linkId="linkId" />
```
**linkForm：** 非必填，用于渲染链接表单数据，常用于编辑回填

```html
<SelectLinkModel v-model:visible="linkVisible" :linkId="linkId" :linkForm="linkForm" />
```

### 事件

| 事件名 | 类型 | 说明 | 返回值 |
| ----- | --- | ----- | ----- |
| confirm | Function | 确认选择 | 当前选中的链接(包含表单数据) |
| close | Function | 关闭弹窗 | 无 |


> 提示：如果支持返回其他参数和事件，可参考 [Ant design Vue 3.2.20](https://3x.antdv.com/components/modal-cn) 自行添加


### 链接格式

```ts
// 链接组
export const insideLinksGroup = ref<linkGroup[]>([{
    id: guid(),
    title: '主要界面',
    data: [{
        id: guid(),
        linkName: "首页",
        linkUrl: "/pages/index/index"
    }]
},{
    id: guid(),
    title: '商品数据',
    data: [{
        id: guid(),
        linkName: "商品详情",
        linkUrl: "/subPackages/goods/detail",
        /**
         * 非必填字段 form，由于商品详情需要商品id，所以需要使用form字段，
         * 该字段类型为数组，每一项就是一个参数，可以多个，
         * 使用 form 之后，单选择该链接时，弹窗右边会动态生成form表单并弹出
         */
        form: [{ 
            label: '商品ID', // 表单项标题
            value: '',      // 表单项值
            required: true  // 表单项是否必填
        }]
    }]
}])
```
链接组类型为：linkGroup数组

```ts
interface linkGroup {
    id: string,
    title: string,
    data: InsideLinks[]
}
```
**confirm：** 事件将返回选中的链接，如下
```ts
{
    id: guid(),
    title: '商品数据',
    data: [{
        id: guid(),
        linkName: "商品详情",
        linkUrl: "/subPackages/goods/detail",
        /**
         * 非必填字段 form，由于商品详情需要商品id，所以需要使用form字段，
         * 该字段类型为数组，每一项就是一个参数，可以多个，
         * 使用 form 之后，单选择该链接时，弹窗右边会动态生成form表单并弹出
         */
        form: [{ 
            label: '商品ID', // 表单项标题
            value: '',      // 表单项值
            required: true  // 表单项是否必填
        }]
    }]
}
```

### 其他

[**guid：**](/src/utils/guid.ts)生成唯一id




