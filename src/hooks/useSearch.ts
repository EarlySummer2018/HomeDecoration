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
            templateStore.setCurrentHandlerObject(nVal)
        }
    })
    return {
        searchContent
    }
}

export default useSearch