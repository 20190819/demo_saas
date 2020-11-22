// 封装 axios

import axios from "axios"

const request=axios.create({
    baseURL:process.env.VUE_APP_API_HOST
});

request.interceptors.request.use(function (config) {
  if(config.url!='/auth/login'){
    var token = JSON.parse(window.localStorage.getItem("token"))
    config.headers["Authorization"]="Bearer "+token.access_token;
  }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export default request