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
            const obj = data
            obj.value = nVal
            templateStore.setCurrentHandlerObject(obj)
        }
    })
    return {
        polylineStyle
    }
}

export default usePolyline