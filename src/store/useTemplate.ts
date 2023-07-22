import guid from '@/utils/guid'
import { defineStore } from 'pinia'
interface Module<T> {
    id: string,
    type: string,
    value: T
}
export default defineStore('template', {
    state: () => ({
        currentId: 'header',
        currentType: 'header',
        modulesList: [] as any
    }),
    actions: {
        changeCurrent(id: string, type: string) {
            this.currentId = id,
            this.currentType = type
        },
        addModule<T>(type: string, value: T) {
            const m: Module<T> = {
                id: guid(),
                type,
                value
            }
            this.modulesList.push(m)
            
        },
        deleteModule(key:string){
            const index = this.modulesList.findIndex((el:any)=>el.id === key)
            if (~index) {
                this.modulesList.splice(index, 1)
            }
        },
        updateModuleList(modulesList:any) {
            this.modulesList = modulesList
        }
    },
    getters: {
        id: (state) => state.currentId,
        list: (state) => state.modulesList,
        type: state => state.currentType
    }
})