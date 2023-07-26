import guid from "@/utils/guid";
import { computed, ref } from "vue";
export interface DrawerParams {
    title: string,
    visible: boolean,

}
interface OuterLinkItem {
    id: string,
    linkName: string
    linkUrl: string
}
export interface LinkForm {
    label: string
    value: ns
    required: boolean
}
export interface InsideLinks {
    id: string,
    linkName: string
    linkUrl: string,
    form?: LinkForm[]
}
interface linkGroup {
    id: string,
    title: string,
    data: InsideLinks[]
}
export const outerLinks = ref<OuterLinkItem[]>([{
    id: guid(),
    linkName: "百度",
    linkUrl: "https://www.baidu.com"
},{
    id: guid(),
    linkName: "火狐",
    linkUrl: "https://start.firefoxchina.cn"
},{
    id: guid(),
    linkName: "Google",
    linkUrl: "https://www.google.com"
},{
    id: guid(),
    linkName: "4399",
    linkUrl: "https://www.4399.com"
}])

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
    title: '个人中心',
    data: [{
        id: guid(),
        linkName: "我的钱包",
        linkUrl: "/personal/myWallet",
        form: [{
            label: '商品ID',
            value: '',
            required: true
        }]
    }]
}])
export const groupKeys = computed(()=>{
    return insideLinksGroup.value.map((el:linkGroup)=>el.id)
})
