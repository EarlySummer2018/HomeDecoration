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

type p = 'all' | 'around'
/**
 * 移除文本空格
 * @param {string|number} text 需要移除空格的文本
 * @param {p} position 需要移除的哪个位置的空格，默认：all，可选：around
 * @returns {string} 返回去除空格后的字符串
 */
export const removeSpaces = (text: ns, position:p="all"):string => {
    const str = text.toString()
    if (position === 'all') {
        return str.replace(/\s+/g,'')
    }
    return str.replace(/^\s+|\s+$/g, '')
}

/**
 * 判断是否
 * @param {string} text 需要判断是否为空的文本
 * @returns {boolean} 返回是否为空
 */
export const isEmpty = (text: ns):boolean => {
    const str = text.toString()
    return !str.replace(/\s+/g, '').length
}