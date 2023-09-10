import { useTemplate } from "@/store"
const useBlancks = () => {
    const { currentHanderObject } = useTemplate()
    const { data } = currentHanderObject
    return {
        blanksStyle: data.style
    }
}

export default useBlancks