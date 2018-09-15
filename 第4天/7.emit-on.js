// 发布emit 订阅on {女生失恋: ['哭', '吃', '购物']}
class Girl {
  constructor() {
    this._events = {};
  }
}

Girl.prototype.on = function (eventName, cb) {
  if (!this._events.hasOwnProperty(eventName)) {
    this._events[eventName] = [cb];
  } else {
    this._events[eventName].push(cb);
  }
};
Girl.prototype.emit = function (eventName, ...args) {
  if (this._events[eventName]) {
    this._events[eventName].filter((cb) => cb(...args));
  }
};

let girl = new Girl();
let cry = (who, todo) => console.log(who + todo + '哭');
let eat = (who, todo) => console.log(who + todo + '吃');
let shop = (who, todo) => console.log(who + todo + '购物');
girl.on('失恋', cry);
girl.on('失恋', eat);
girl.on('失恋', shop);
girl.emit('失恋', '我', '要');
