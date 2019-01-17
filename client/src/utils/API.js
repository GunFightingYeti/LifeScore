import axios from "axios";

export default {
  getAllChieves: function() {
    return axios.get("/api/achievements");
  },
  getOneCategory: function(category) {
    return axios.get("/api/achievements/" + category);
  },
  saveChieve: function(id) {
    return axios.put("/api/achievements/save/" + id);
  },
  getSaved: function() {
    return axios.post("/api/achievements/saved");
  },
  getPassed: function() {
    return axios.get("/api/achievements/passed");
  },
  getPlayer: function() {
    return axios.post("/api/player");
  },
 };
