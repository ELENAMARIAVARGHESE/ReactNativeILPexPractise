import axios  from 'axios';
var api = axios.create();
api.defaults.baseURL = 'https://mocki.io/';
api.defaults.headers.common['Content-Type'] = 'application/json';
 
export default api;