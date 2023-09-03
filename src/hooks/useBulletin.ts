import { useTemplate } from "@/store"
import { computed } from "vue"
const useBulletin = () => {
    const templateStore = useTemplate()
    const data = templateStore.currentHanderObject
    const bulletinStyle = computed({
        get() {
            return data.value
        },
        set(nVal) {
            templateStore.setCurrentHandlerObject(nVal)
        }
    })
    return {
        bulletinStyle
    }
}

export default useBulletin