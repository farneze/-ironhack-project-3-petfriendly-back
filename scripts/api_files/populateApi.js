const Unsplash = require("./imageGen");
const Faker = require("./infoGen");

var imageApi = new Unsplash();
var fakeApi = new Faker();

function PopulateApi(query, qty) {
  this.query = query || "";
  this.qty = qty || 1;

  this.config = (qty, query) => {
    this.query = query || "";
    this.qty = qty;
  };

  //   ----------- Account Generator ------------
  this.accGen = () => {
    imageApi.config(this.qty, this.query);
    return imageApi.get().then((result) => {
      // return imageApi.getRandom().then((result) => {
      const images = result.flat();
      // console.log(images);
      fakeApi.config(this.qty, images);
      return Promise.all(fakeApi.generateAccounts());
    });
  };

  //   -------------- Post Generator -------------------------
  this.postGen = () => {
    imageApi.config(this.qty, this.query);
    return imageApi.get().then((result) => {
      const images = result.flat();
      fakeApi.config(this.qty, images);
      // console.log(fakeApi.generatePost());
      return fakeApi.generatePost();
    });
  };

  //   ------------ Comment Generator ------------------------
  this.commGen = () => {
    fakeApi.config(this.qty);
    // console.log(fakeApi.generateComment());
    return fakeApi.generateComment();
  };

  this.status = () => {
    console.log("Query => " + this.query);
    console.log("Qty => " + this.qty);
  };
}

module.exports = PopulateApi;
