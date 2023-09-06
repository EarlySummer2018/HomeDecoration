import deepClone from "@/utils/deepClone";
import guid from "@/utils/guid";
import { defaultSwiperItem } from "../content/swiper/swiper";

const data = {
  swiper: {
    value: [
      { ...deepClone(defaultSwiperItem), id: guid() },
      { ...deepClone(defaultSwiperItem), id: guid() },
    ],
    options: {
      dotPosition: "center",
      dotBgColor: "#ff69b4",
      dotDefaultBgColor: "#ffffff",
      dotShape: "round",
      dotSize: 10,
      autoPlay: true,
      speed: 3,
      titleColor: '#FFFFFF',
      titleBgType: 1,
      titleBgColor: '#ff69b4',
      gradientDirectional: 'bottom'
    },
  },
  search: {
    value: {
      placeholder: "请输入关键词进行搜索",
      textAlign: "left",
      style: "square",
      containerBgColor: "#f1f1f2",
      searchBgColor: "#fff",
    },
  },
  blanks: {
    value: {
      height: 10,
      bgColor: "#FFFFFF",
    },
  },
  polyline: {
    value: {
      height: 1,
      padding: 10,
      style: "solid",
      lineColor: "#000000",
      bgColor: "#FFFFFF",
    },
  },
  fileNumber: {
    value: {
      content: "网站备案号：粤ICP备10000000号-1",
      link: "https://beian.miit.gov.cn/",
      fontSize: 10,
      fontColor: "#000000",
      textAlign: "center",
      px: 0,
      py: 6,
      bgColor: "#FFFFFF",
    },
  },
  customerService: {
    value: {
      type: "online",
      bottom: 10,
      right: 0,
      icon: "",
      opacity: 1,
    },
  },
  weixinOfficial: {
    value: {}
  },
  bulletin: {
    value: {
      textColor: "#1890ff",
      bgColor: "#cae1f7",
      margin: 0,
      fontSize: 12,
      content: "这是系统公告组件",
      link: {},
    },
  },
  news: {
    value: {
      textColor: "#1890ff",
      bgColor: "#cae1f7",
      margin: 0,
      fontSize: 12,
      content: "这是头条组件",
      link: {},
    }
  }
};

export const getModelValue = (key: string) => {
    if (!Reflect.has(data, key)) {
      return false
    }
    return Reflect.get(data, key)
}