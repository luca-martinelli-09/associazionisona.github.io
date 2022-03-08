import privacy from "https://lucamartinelli.eu.org/blog/privacy.js";

const articles = [
  {
    id: 0,
    hide: true,
    ...privacy,
  },
];

export default {
  data() {
    let urlSplit = document.location.href.split("/");
    let lastParam = urlSplit[urlSplit.length - 1];
    let id = Number.isInteger(lastParam) ? parseInt(lastParam) : null;
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
