import { useTemplate } from "@/store"
const useNavigation = () => {
    const { currentHanderObject } = useTemplate()
    const { data } = currentHanderObject
    return {
        data,
        style: data.style,
        options: data.options
    }
}

export default useNavigation