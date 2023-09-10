import { useTemplate } from "@/store"

const useFileNumber = () => {
    const { currentHanderObject } = useTemplate()
    const { data } = currentHanderObject

    return {
        data: data.value,
        style: data.style
    }
}

export default useFileNumber