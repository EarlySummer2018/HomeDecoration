import deepClone from "@/utils/deepClone";
import guid from "@/utils/guid";
import { defaultSwiperItem } from "../content/swiper/swiper";

const data = {
  swiper: {
    value: [
      { ...deepClone(defaultSwiperItem), id: guid() },
      { ...deepClone(defaultSwiperItem), id: guid() },
    ],
    style: {
      dotBgColor: "#ff69b4",
      dotDefaultBgColor: "#ffffff",
      dotShape: "round",
      dotSize: 10,
      titleColor: '#FFFFFF',
      titleBgColor: '#ff69b4',
    },
    options: {
      dotPosition: "center",
      autoPlay: true,
      speed: 3,
      titleBgType: 1,
      gradientDirectional: 'bottom'
    },
  },
  search: {
    style: {
      textAlign: "left",
      style: "square",
      containerBgColor: "#f1f1f2",
      searchBgColor: "#fff",
    },
    value: {
      placeholder: "请输入关键词进行搜索",
    },
  },
  blanks: {
    style: {
      height: 10,
      bgColor: "#FFFFFF",
    }
  },
  polyline: {
    style: {
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
    },
    style: {
      fontSize: 10,
      fontColor: "#000000",
      textAlign: "center",
      px: 0,
      py: 6,
      bgColor: "#FFFFFF",
    }
  },
  customerService: {
    value: {
      icon: "",
    },
    style: {
      bottom: 10,
      right: 0,
      opacity: 1,
    },
    options: {
      type: "online",
    }
  },
  weixinOfficial: {
    value: {}
  },
  bulletin: {
    value: {
      content: "这是系统公告组件",
    },
    style: {
      textColor: "#1890ff",
      bgColor: "#cae1f7",
      margin: 0,
      fontSize: 12,
    },
    options: {
      link: {},
    }
  },
  news: {
    value: [{
      id: guid(),
      content: '这是头条组件',
    }],
    style: {
      textColor: "#1890ff",
      bgColor: "#cae1f7",
      margin: 0,
      fontSize: 12,
    },
    options: {
      link: {},
      dataFrom: 1,
      showNum: 1
    }
  },
  navigation: {
    value: [{
      id:guid(),
      icon: '',
      text: '导航1',
      link: {}
    },
    {
      id:guid(),
      icon: '',
      text: '导航2',
      link: {}
    },
    {
      id:guid(),
      icon: '',
      text: '导航3',
      link: {}
    },
    {
      id:guid(),
      icon: '',
      text: '导航4',
      link: {}
    }],
    style: {
      bgColor: '#FFFFFF',
      py: 0,
      textColor: '#000000'
    },
    options: {
      colNum: 4,
    }
  },
  article:{
    value: [],
    options: {
      cate: 0,
      num: 6
    },
    style: {}
  }
};

export const getModelValue = (key: string) => {
    if (!Reflect.has(data, key)) {
      return false
    }
    return Reflect.get(data, key)
}