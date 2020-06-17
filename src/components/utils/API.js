import axios from "axios";

export default {
  search: function () {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  },
};
