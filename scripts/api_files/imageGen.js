const axios = require("axios");

const key = "test";

function Unsplash(qty, query) {
  this.qty = qty || "10";
  this.query = query || "canada";

  this.config = (qty, query) => {
    this.qty = qty;
    this.query = query;
    // this.status();
  };

  this.setUrl = (page, type) => {
    if (type == "r") {
      const unsplashUrl =
        "https://api.unsplash.com/photos/random?query=" + this.query;
      var fullQuery = unsplashUrl + key;
    } else {
      const unsplashUrl =
        "https://api.unsplash.com/search/photos?query=" + this.query;
      const perPage = "&per_page=" + this.qty;
      const pageNumber = "&page=" + page;
      var fullQuery = unsplashUrl + pageNumber + perPage + key;
    }
    // console.log(fullQuery);
    return fullQuery;
  };

  this.get = () => {
    if (this.qty > 30) {
      const pages = Math.ceil(this.qty / 30);
      const count = this.qty;
      return Promise.all(
        [...new Array(pages)].map((el, i) => {
          this.config(count - 30 * i, this.query);
          // this.status();
          const url = this.setUrl(i + 1);
          return this.getResult(url);
        })
      );
    } else {
      const url = this.setUrl(1);
      return this.getResult(url);
    }
  };

  this.getRandom = () => {
    if (this.qty > 1) {
      const pages = this.qty;
      const count = this.qty;

      return Promise.all(
        [...new Array(pages)].map((el, i) => {
          this.config(count - i, this.query);
          const url = this.setUrl(i + 1, "r");
          return this.getResult(url, "r");
        })
      );
    } else {
      const url = this.setUrl(1, "r");
      return this.getResult(url, "r");
    }
  };

  this.getResult = async (url, type) => {
    try {
      const response = await axios.get(url);
      // console.log(response.data.urls.regular);
      if (type == "r") {
        return response.data.urls.regular;
      } else {
        const results = [...response.data.results];
        return results.map((el) => el.urls.regular);
      }
    } catch (err) {
      console.error(err);
    }
  };

  this.status = () => {
    console.log("------- image -------");
    console.log("Search Query => " + this.query);
    console.log("Quantity => " + this.qty);
    console.log("---------------------");
  };
}

module.exports = Unsplash;
