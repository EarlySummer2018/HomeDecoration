import { useTemplate } from "@/store";
const useArticle = () => {
  const { currentHanderObject } = useTemplate();

  const { data } = currentHanderObject;
  
  return {
    data,
    style: data.style,
    options: data.options,
  };
};

export default useArticle;
