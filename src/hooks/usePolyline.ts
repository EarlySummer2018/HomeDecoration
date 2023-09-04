import { useTemplate } from "@/store"
import { computed } from "vue"
const usePolyline = () => {
    const templateStore = useTemplate()
    const data = templateStore.currentHanderObject
    const polylineStyle = computed({
        get() {
            return data.value
        },
        set(nVal) {
            templateStore.setCurrentHandlerObject(nVal)
        }
    })
    return {
        polylineStyle
    }
}

export default usePolyline