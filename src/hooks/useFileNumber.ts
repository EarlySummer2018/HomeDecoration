import { useTemplate } from "@/store"
import { computed } from "vue"
const useFileNumber = () => {
    const templateStore = useTemplate()
    const data = templateStore.currentHanderObject
    const fileNumberContent = computed({
        get() {
            return data.value
        },
        set(nVal) {
            templateStore.setCurrentHandlerObject(nVal)
        }
    })
    return {
        fileNumberContent
    }
}

export default useFileNumber