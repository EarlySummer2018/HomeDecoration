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
            const obj = data
            obj.value = nVal
            templateStore.setCurrentHandlerObject(obj)
        }
    })
    return {
        blanksStyle
    }
}

export default useBlancks