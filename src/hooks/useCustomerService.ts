import { useTemplate } from "@/store"
import { computed } from "vue"
const useCustomerService = () => {
    const templateStore = useTemplate()
    const data = templateStore.currentHanderObject
    const customerServiceStyle = computed({
        get() {
            return data.value
        },
        set(nVal) {
            templateStore.setCurrentHandlerObject(nVal)
        }
    })
    return {
        customerServiceStyle
    }
}

export default useCustomerService