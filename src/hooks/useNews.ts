import { useTemplate } from "@/store";
const useNews = () => {
  const { currentHanderObject } = useTemplate();
  
  const news = currentHanderObject.data
  
  return {
    data: news,
    style: news.style,
    options: news.options
  };
};

export default useNews;
