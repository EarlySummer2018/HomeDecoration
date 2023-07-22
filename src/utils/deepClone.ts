// 深拷贝
const deepClone = <T>(obj: T, hash: WeakMap<any, any> = new WeakMap()):T => {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    if (obj instanceof Date) {
      return new Date(obj) as any
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj) as any
    }
    if (hash.has(obj)) {
        return hash.get(obj) as T
    }
    const result = typeof obj === 'object' ? Object.create(Object.getPrototypeOf(obj)) : new (Object.getPrototypeOf(obj).constructor)();


    hash.set(obj, result)
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = deepClone(obj[key], hash)
        }
    }

    return result as T
}

export default deepClone