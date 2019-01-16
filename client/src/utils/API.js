import axios from "axios";

export default {
  // Gets all achievements
  getAllChieves: function() {
    return axios.post("/api/achievements");
  },
  //Get one category
  // getOneCategory: function() {
  //   return axios.post("/api/achievements");
  // },
  getPlayer: function() {
    return axios.post("/api/player");
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
