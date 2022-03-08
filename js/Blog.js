import privacy from "../blog/privacy.js";

const articles = [
  {
    id: 0,
    hide: true,
    ...privacy,
  },
];

export default {
  data() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.has("id") ? parseInt(urlParams.get("id")) : null;
    let article = null;

    if (id != null) {
      article = articles.find((article) => article.id === id);
    }

    if (article) {
      return {
        article: article,
      };
    }

    return {
      articles: articles
        .filter((article) => article.hide ? !article.hide : true)
        .map((article) => ({
          id: article.id,
          title: article.title,
        })),
    };
  },
};
