declare type ns = number | string

/**
 * 链接表单参数
 */
declare interface LinkForm {
    label: string
    value: ns
    required: boolean
}
/**
 * 内部链接接口
 */
declare interface InsideLinks {
    id: string,
    linkName: string
    linkUrl: string,
    form?: LinkForm[]
}