import { useQuery } from "react-query";
import axios from "axios";

const fetchArticles = async () => {
  try {
    const res = await axios.get(`http://localhost:8080/api/v1/articles`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

const fetchArticle = async (id) => {
  try {
    const res = await axios.get(`http://localhost:8080/api/v1/articles/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export default function useArticles() {
  return useQuery("aricles", fetchArticles);
}

export function useArticle(id) {
  return useQuery(["article",id],()=> fetchArticle(id));
}

