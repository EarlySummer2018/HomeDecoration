import { useTemplate } from "@/store"

const useBulletin = () => {
    const { currentHanderObject } = useTemplate()
    const { data } = currentHanderObject

    return {
        data: data.value,
        style: data.style,
        options: data.options
    }
}

export default useBulletin