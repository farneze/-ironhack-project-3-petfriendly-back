require("dotenv").config();
var faker = require("faker");

const powerword = process.env.PASSWORD_HASH;

function Faker(n, images, chance, pw) {
  this.nPeople = n || 1;
  this.images = images || [];
  this.password = pw || powerword;
  this.chance = chance || 0.25;

  this.config = (n, images, chance, pw) => {
    this.nPeople = n;
    this.images = images || [];
    this.password = pw || powerword;
    this.chance = chance || 0.2;
    // this.status();
  };

  this.generateComment = () => {
    return [...new Array(this.nPeople)].map((el, i) => {
      return faker.lorem.paragraph();
    });
  };

  this.generatePost = () => {
    return [...new Array(this.nPeople)].map((el, i) => {
      return this.buildPost(i);
    });
  };

  this.buildPost = (idx) => {
    try {
      const img = this.images[idx];
      const prefix = Math.random() < 0.1 ? faker.name.prefix() + " " : "";
      const sufix = Math.random() < 0.1 ? " " + faker.hacker.ingverb() : "";
      const name = prefix + faker.name.firstName() + sufix;
      const dscptn = faker.lorem.paragraph();
      const adopt = Math.random() < this.chance;
      if (img == []) {
        return {
          image: "",
          petName: name,
          description: dscptn,
          adoption: adopt,
        };
      }
      return {
        image: img,
        petName: name,
        description: dscptn,
        adoption: adopt,
      };
    } catch (err) {
      console.error(err);
    }
  };

  this.generateAccounts = () => {
    return [...new Array(this.nPeople)].map((el, i) => {
      return this.buildCard(i);
    });
  };

  this.buildCard = (idx) => {
    try {
      const name = faker.name.findName();
      const email = faker.internet.email();
      const password = this.password;
      const image = this.images[idx];
      if (this.images == []) {
        return { email: email, name: name, passwordHash: password };
      }
      return { email: email, name: name, passwordHash: password, image: image };
    } catch (err) {
      console.error(err);
    }
  };

  this.status = () => {
    console.log("------- faker ------");
    console.log("nPeople => " + this.nPeople);
    console.log("password => " + this.password);
    console.log("images => " + this.images.length);
    console.log("chance => " + this.chance);
    console.log("---------------------");
  };
}

module.exports = Faker;

// var randomCard = faker.helpers.createCard();

// http://placeimg.com/640/480/people
// http://placeimg.com/640/480/animals
// modifiers: /greyscale  or  /sepia

// 1000 people
// each person 30 friends
// each person 3 posts
// each post 50% chance of like
// each post 5 comments from friends
// each comment 30% chance of like

// [
//   "name" =
//   "username" =
//   "email" =
//   "address" =
//   "phone" =
//   "website" =
//   "company" =
//   "posts" = [ 'words', 'sentence', 'sentences', 'paragraph' ]
//   "accountHistory" =
// ];

// USER
//   email: String,
//   name: String,
//   passwordHash: String,
//   // image: ,
//   posts: [String],
//   comments: [String],
//   // pets: [String],
//   petsFriends: [String],

// POST
//   image: String,
//   petName: String,
//   description: String,
//   adoption: Boolean,
//   tag: [String],
//   likes: [String],
//   comments: [String],

// COMMENT
//   userID: String,
//   comment: String,
//   Likes: [String],
