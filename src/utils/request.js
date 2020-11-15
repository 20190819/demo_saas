// 封装 axios

import axios from "axios"

const request=axios.create({
    baseURL:""
});

request.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export default request