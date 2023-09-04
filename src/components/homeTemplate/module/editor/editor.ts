import HeaderEdtior from './header'
import SearchEdtior from './search';
import SwiperEdtior from './swiper';
import BlanksEdtior from './blanks';
import PolylineEdtior from './polyline';
import FileNumberEdtior from './fileNumber'
import WeixinOfficialEdtior from './wexinOfficial'
import CustomerService from './customerService';
import Bulletin from './bulletin';

export const getComponent = (type: string) => {
    const data = {
        search: SearchEdtior,
        header: HeaderEdtior,
        swiper: SwiperEdtior,
        blanks: BlanksEdtior,
        polyline: PolylineEdtior,
        fileNumber: FileNumberEdtior,
        weixinOfficial: WeixinOfficialEdtior,
        customerService: CustomerService,
        bulletin: Bulletin,
    }
    if (!Reflect.has(data, type)) return ''
    return Reflect.get(data, type)
}

export {
    HeaderEdtior,
    SearchEdtior,
    SwiperEdtior,
    BlanksEdtior,
    PolylineEdtior,
    FileNumberEdtior,
    WeixinOfficialEdtior,
    CustomerService,
    Bulletin
}