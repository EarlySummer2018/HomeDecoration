import { ref } from "vue";
const dragIndex = ref<number>(-1)
const timer = ref<null|NodeJS.Timeout>(null)
const useDrag = (list: any) => {
    const dragStart = (index: number) => {
        dragIndex.value = index
    }
    const dragEnter = (event: DragEvent, index: number) => {
        event.preventDefault()
        timer.value && clearTimeout(timer.value)
        timer.value = setTimeout(() => {
            if(dragIndex.value !== index){
                const source = list[dragIndex.value]
                list.splice(dragIndex.value, 1)
                list.splice(index, 0, source)
                // 排序变化后目标对象的索引变成源对象的索引
                dragIndex.value = index;
              }
        }, 100);
    }
    const dragOver = (event:DragEvent) => {
        event.preventDefault();
    }

    return {
        dragStart,
        dragEnter,
        dragOver
    }
}

export default useDrag