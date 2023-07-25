import { useTemplate } from "@/store"
import { computed } from "vue"
const useSearch = () => {
    const templateStore = useTemplate()
    const data = templateStore.currentHanderObject
    const searchContent = computed({
        get() {
            return data.value
        },
        set(nVal) {
            const obj = data
            obj.value = nVal
            templateStore.setCurrentHandlerObject(obj)
        }
    })
    return {
        searchContent
    }
}

export default useSearch