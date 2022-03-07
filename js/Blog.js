const articles = [];

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
      articles: articles.map((article) => ({
        id: article.id,
        title: article.title,
      })),
    };
  },
};
