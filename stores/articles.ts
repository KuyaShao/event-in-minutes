import { defineStore } from "pinia";
import type { Article } from "~/models/articles";

export const useArticleStore = defineStore("articles", {
  state: () => ({
    articles: [] as Article[],
    displayedArticles: [] as Article[],
    currentCount: 6,
  }),

  actions: {
    setArticles(articles: Article[]) {
      this.articles = articles;
      this.updateDisplayedArticles();
    },

    updateDisplayedArticles() {
      this.displayedArticles = this.articles.slice(0, this.currentCount);
    },

    showMore() {
      this.currentCount += 6;
      this.updateDisplayedArticles();
    },
  },
});
