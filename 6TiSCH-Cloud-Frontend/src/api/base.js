import axios from 'axios'

var instance = axios.create()

instance.defaults.baseURL = '/'
// instance.defaults.baseURL = 'http://pi4/'
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default instance