import { useTemplate } from "@/store"
import { computed } from "vue"
const useBlancks = () => {
    const templateStore = useTemplate()
    const data = templateStore.currentHanderObject
    const blanksStyle = computed({
        get() {
            return data.value
        },
        set(nVal) {
            templateStore.setCurrentHandlerObject(nVal)
        }
    })
    return {
        blanksStyle
    }
}

export default useBlancks