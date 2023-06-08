import { defineStore } from 'pinia'
type dp = 'flex-start' | 'center' | 'flex-end';
type ds = 'round' | 'square' | 'rectangular';
interface State {
    dotPosition: dp,
    dotBgColor: string,
    dotDefaultBgColor: string,
    dotShape: ds,
    dotSize: number
}
export default defineStore('useSwiper', {
    state: (): State => ({
        dotPosition: 'center',
        dotBgColor: 'hotPink',
        dotDefaultBgColor: '#fff',
        dotShape: 'round',
        dotSize: 10
    }),
    actions: {
        setDotPosition(position: dp) {
            this.dotPosition = position
        },
        setDotBgColor(color: string) {
            this.dotBgColor = color
        },
        setDotShape(shape: ds) {
            this.dotShape = shape
        },
        setDotSize(size: number) {
            this.dotSize = size
        }
    },
    getters: {
        dp: state => state.dotPosition,
        dbc: state => state.dotBgColor,
        ddbc: state => state.dotDefaultBgColor,
        ds: state => state.dotShape,
        dSize: state => state.dotSize
    }
})