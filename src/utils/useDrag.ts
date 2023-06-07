import { ref } from "vue";
const dragIndex = ref<number>(-1)
const timer = ref<null|NodeJS.Timeout>(null)
const useDrag = (list: any) => {
    const dragStart = (index: number):void => {
        dragIndex.value = index
    }
    const dragEnter = (event: DragEvent, index: number):void => {
        event.preventDefault()
        timer.value && clearTimeout(timer.value)
        timer.value = setTimeout(() => {
            if(dragIndex.value !== index){
                const source = list.value[dragIndex.value]
                list.value.splice(dragIndex.value, 1)
                list.value.splice(index, 0 , source)
                // 排序变化后目标对象的索引变成源对象的索引
                dragIndex.value = index;
              }
        }, 100);
    }
    const dragOver = (event:DragEvent):void => {
        event.preventDefault();
    }

    return {
        dragStart,
        dragEnter,
        dragOver
    }
}

export default useDrag