/**
 * 根据类型转换成文字
 * @param {string} type 当前选择的组件类型
 * @returns {string} 返回字符串
 * @example typeToText('search') // '搜索设置'
 * 
 */
export const typeToText = (type:string): string => {
    const obj:{[key in string]:string} = {
        search: '搜索设置',
        swiper: '轮播图设置'
    }
    if (Reflect.has(obj, type)) {
        return Reflect.get(obj, type)
    }
    return '页面设置'
}