import { useTemplate } from "@/store"
const useSearch = () => {
    const { currentHanderObject } = useTemplate()
    const { data } = currentHanderObject
    return {
        data,
        style: data.style
    }
}

export default useSearch