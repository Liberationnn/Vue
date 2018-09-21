import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'; // 添加默认请求路径

// 拦截response，使其直接返回data
axios.interceptors.response.use((res) => res.data);

// 获取轮播图数据，返回的是一个promise对象
export let getSliders = () => {
  return axios.get('/sliders');
};
// 获取热门图书数据
export let getHotBooks = () => {
  return axios.get('/hotBooks');
};
// 获取轮播图和热门图书数据
export let getAll = () => {
  return axios.all([getSliders(), getHotBooks()]);
};
// 获取所有图书
export let getAllBooks = () => {
  return axios.get('/allBooks');
};
// 获取更多图书
export let getMoreBooks = (offset) => {
  return axios.get(`/moreBooks/${offset}`);
};
// 获取指定id的图书
export let getBook = (id) => {
  return axios.get(`/book/${id}`);
};
// 添加图书
export let addBook = (book) => {
  return axios.post(`/book`, book);
};
// 修改图书
export let updateBook = (book) => {
  return axios.put('/book', book);
};
// 删除图书
export let removeBook = (id) => {
  return axios.delete(`/book/${id}`);
};
// 初始化数据
export let initBooks = () => {
  return axios.get('/initBooks');
};
