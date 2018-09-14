let vm = new Vue({
  el: '#app',
  data: {
    title: '',
    todos: [
      {isSelected: false, title: '睡觉'},
      {isSelected: false, title: '吃饭'}
    ],
    curTodo: '',
    hash: ''
  },
  created() {
    // 如果localStorage中有数据就覆盖原有数据，如果没有就用原有数据
    this.todos = JSON.parse(localStorage.getItem('vueTodo')) || this.todos;

    // 在页面加载时获取hash值
    this.hash = window.location.hash ? window.location.hash.slice(2) : 'all';

    // 监控hash值的变化
    window.addEventListener('hashchange', () => {
      // 当hash值变化，重新操作记录的数据
      this.hash = window.location.hash.slice(2);
    });
  },
  methods: {
    addTodo() {
      if (this.title.trim()) {
        this.todos.push({isSelected: false, title: this.title});
        this.title = '';
      }
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((item) => item !== todo);
    },
    rememberTodo(todo) {
      this.curTodo = todo;
    },
    cancel() {
      this.curTodo = "";
    }
  },
  computed: {
    needTodoNum() {
      return this.todos.filter((item) => !item.isSelected).length;
    },
    showTodos() {
      switch (this.hash) {
        case 'all':
          return this.todos;
        case 'finish':
          return this.todos.filter((item) => item.isSelected);
        case 'unfinish':
          return this.todos.filter((item) => !item.isSelected);
        default:
          return this.todos;
      }
    }
  },
  watch: {
    todos: { //watch默认只监控一层的数据变化，深度监控需要把类型改为对象，并添加deep:true
      handler() { //默认写成函数 就相当于默认写了个handler
        localStorage.setItem('vueTodo', JSON.stringify(this.todos));
      },
      deep: true
    }
  },
  directives: {
    focus(element, bindings) {
      if (bindings.value) {
        element.focus();
      }
    }
  }
});