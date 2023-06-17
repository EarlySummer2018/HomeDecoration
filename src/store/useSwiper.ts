import type { dp, ds, su, SwiperItem, SwiperState, tb } from '@/interface/swiper'
import { defineStore } from 'pinia'

export default defineStore('useSwiper', {
    state: (): SwiperState => ({
        swiperStyle: {
            dotPosition: 'center',
            dotBgColor: 'hotPink',
            dotDefaultBgColor: '#fff',
            dotShape: 'round',
            dotSize: 10,
            autoPlay: true,
            speed: 3000,
        },
        swiper: [{
            id: '',
            path: '',
            title: '',
            titlePosition: 'bottom',
            link: '',
            linkType: ''
        }]
    }),
    actions: {
        setSwiper(swiper:SwiperItem[]) {
            this.swiper = swiper
        },
        setPath(path:string, upload_id:string|number, index:number) {
            this.swiper[index].path = path
            this.swiper[index].upload_id = upload_id
        },
        setDotPosition(position: dp) {
            this.swiperStyle.dotPosition = position
        },
        setDotBgColor(color: string) {
            this.swiperStyle.dotBgColor = color
        },
        setDotDefaultBgColor(color: string) {
            this.swiperStyle.dotDefaultBgColor = color
        },
        setDotShape(shape: ds) {
            this.swiperStyle.dotShape = shape
        },
        setDotSize(size: number) {
            this.swiperStyle.dotSize = size
        },
        setAutoPlay(autoPlay: boolean) {
            this.swiperStyle.autoPlay = autoPlay
        },
        setSpeed(speed: number) {
            this.swiperStyle.speed = speed
        },
        setTitle(title: su, index:number) {
            this.swiper[index].title = title
        },
        setTitlePosition(position: tb, index:number) {
            this.swiper[index].titlePosition = position
        },
        setLink(link: su, index:number) {
            this.swiper[index].link = link
        },
        setLinkType(linkType: su, index:number) {
            this.swiper[index].linkType = linkType
        }
    },
    getters: {
        dotPosition: state => state.swiperStyle.dotPosition,
        dotBgColor: state => state.swiperStyle.dotBgColor,
        dotDefaultBgColor: state => state.swiperStyle.dotDefaultBgColor,
        dotShape: state => state.swiperStyle.dotShape,
        dotSize: state => state.swiperStyle.dotSize,
        autoPlay: state => state.swiperStyle.autoPlay,
        speed: state => state.swiperStyle.speed
    }
})