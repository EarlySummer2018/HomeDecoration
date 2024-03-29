import Swiper from "./swiper";
import Search from "./search";
import Blanks from "./blanks";
import Polyline from "./polyline";
import FileNumber from "./fileNumber";
import WeixinOfficial from './weixinOfficial'
import CustomerService from "./customerService";
import Bulletin from "./bulletin";
import News from './news'
import Navigation from './navigation'
import Article from "./article";
import whiteBgImg from "@/assets/phone-top-white.b2d6121b.png";

export const getComponent = (type:string):any => {
    const data = {
        search: Search,
        swiper: Swiper,
        blanks: Blanks,
        polyline: Polyline,
        fileNumber: FileNumber,
        weixinOfficial: WeixinOfficial,
        customerService: CustomerService,
        bulletin: Bulletin,
        news: News,
        navigation: Navigation,
        article: Article
    }
    if (!Reflect.has(data, type)) {
      return null
    }
    return Reflect.get(data, type)
}
export {
    // Components
    Swiper,
    Search,
    Blanks,
    Polyline,
    FileNumber,
    WeixinOfficial,
    CustomerService,
    Bulletin,
    News,
    Article,

    // constants
    whiteBgImg
}