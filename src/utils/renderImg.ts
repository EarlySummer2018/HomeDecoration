import { computed } from "vue";
type ns = number | string
const computedImgStyle = computed(()=>{
    return ( width: ns, height?: ns ) => {
        const w = Number(width), h = height ? Number(height) : Number(width);
        const aspectRatio = w / h;
        const containerWidth = w;
        const containerHeight = containerWidth / aspectRatio;
        return {
            width: `${containerWidth}px`,
            height: `${containerHeight}px`,
        };
    }
})

export default computedImgStyle