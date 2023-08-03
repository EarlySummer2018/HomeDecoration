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
            const obj = data
            obj.value = nVal
            templateStore.setCurrentHandlerObject(obj)
        }
    })
    return {
        fileNumberContent
    }
}

export default useFileNumber