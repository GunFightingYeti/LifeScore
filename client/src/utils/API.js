import axios from "axios";

export default {
  // Gets all books
  getAchievements: function() {
    return axios.get("/api/browse/achievements");
  },


  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // }
};
