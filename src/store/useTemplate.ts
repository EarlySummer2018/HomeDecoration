import guid from '@/utils/guid'
import { defineStore } from 'pinia'
interface Module<T> {
    id: string,
    type: string,
    value: T
}
export default defineStore('template', {
    state: () => ({
        currentModule: 'header',
        modulesList: [] as any
    }),
    actions: {
        changeCurrent(index: string) {
            this.currentModule = index
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
        }
    },
    getters: {
        current: (state) => state.currentModule,
        list: (state) => state.modulesList
    }
})