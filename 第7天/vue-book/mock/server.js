let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let fs = require('fs');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.static('./dist'));

// 获取数据方法
let read = (url, cb) => {
  fs.readFile(path.join('./', url), 'utf-8', (err, data) => {
    if (err) {
      res.send(404);
    } else {
      cb(JSON.parse(data));
    }
  });
};
// 写入数据方法
let write = (books) => {
  fs.writeFile('./books.json', JSON.stringify(books), (err) => {
    if (err) {
      console.log('删除失败');
    }
  });
};

app.get('/sliders', (req, res) => { // 获取轮播图
  read('sliders.json', (data) => res.send(data));
});
app.get('/hotBooks', (req, res) => { // 获取热门图书
  read('books.json', (data) => {
    let hotBooks = data.reverse().slice(0, 6);
    res.send(hotBooks);
  });
});
app.get('/allBooks', (req, res) => { // 获取所有图书
  read('books.json', (data) => res.send(data));
});
app.get('/moreBooks/:offset', (req, res) => {
  let offset = parseInt(req.params.offset);
  read('books.json', (books) => {
    let result = {};
    result.books = books.reverse().slice(0, offset);
    result.hasMore = offset < books.length;
    res.send(result);
  });
});
app.get('/book/:id', (req, res) => { // 获取指定id的图书
  let id = parseInt(req.params.id);
  read('books.json', (books) => {
    let book = books.filter((item) => item.id === id)[0];
    if (book) {
      res.send(book);
    } else {
      res.send({});
    }
  });
});
app.post('/book', (req, res) => { // 添加图书
  let book = req.body;
  read('books.json', (books) => {
    book.id = books.length + 1;
    books.push(book);
    write(books);
    res.send(books);
  });
});
app.put('/book', (req, res) => { // 修改图书
  let book = req.body;
  read('books.json', (books) => {
    books = books.map((item) => {
      return item.id === book.id ? book : item;
    });
    write(books);
    res.send(books);
  });
});
app.delete('/book/:id', (req, res) => { // 删除图书
  let id = parseInt(req.params.id);
  read('books.json', (books) => {
    books = books.filter((item) => {
      return item.id !== id;
    });
    books.forEach((item, index) => item.id = index + 1);
    write(books);
    res.send(books);
  });
});
app.get('*', (req, res) => {
  fs.createReadStream('./dist/index.html').pipe(res);
});

app.listen(3000);
