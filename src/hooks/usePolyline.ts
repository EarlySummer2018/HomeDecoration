import { useTemplate } from "@/store"
const usePolyline = () => {
    const { currentHanderObject } = useTemplate()
    const { data } = currentHanderObject
    return {
        polylineStyle: data.style
    }
}

export default usePolyline