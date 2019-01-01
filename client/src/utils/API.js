import axios from "axios";

export default {
  // Gets all achievements
  getAchievements: function() {
    return axios.get("/api/achievements");
  },
  getPlayer: function() {
    return axios.get("/api/player");
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
