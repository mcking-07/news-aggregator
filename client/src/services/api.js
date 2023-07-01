import { config } from "../config/config";

const ApiService = {
  fetchArticles: async (category) => {
    const url = category === 'general' ? config.api.articles : config.api.articlesByCategory(category);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
};

export default ApiService;
