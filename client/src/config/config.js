const { REACT_APP_API_BASE_URL, REACT_APP_SERVER_PORT } = process.env;

const API_URL = REACT_APP_SERVER_PORT ? `${REACT_APP_API_BASE_URL}:${REACT_APP_SERVER_PORT}` : `${REACT_APP_API_BASE_URL}`;

export const config = {
  api: {
    articles: `${API_URL}/news/`,
    articlesByCategory: (category) => `${API_URL}/news/${category}`,
  },
};
