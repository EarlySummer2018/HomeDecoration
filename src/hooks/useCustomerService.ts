import { useTemplate } from "@/store"

const useCustomerService = () => {
    const { currentHanderObject } = useTemplate()
    const { data } = currentHanderObject
    
    return {
        data: data.value,
        style: data.style,
        options: data.options
    }
}

export default useCustomerService