<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <UserHeader :todos="todos"></UserHeader>
        <UserList :todos="todos"></UserList>
        <UserFooter :todos="todos" :clearDone="clearDone"></UserFooter>
      </div>
    </div>
  </div>
</template>

<script>
import UserHeader from './components/UserHeader'
import UserList from './components/UserList'
import UserFooter from './components/UserFooter'

export default {
  name: 'App',
  components: {
    UserHeader,
    UserList,
    UserFooter
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || []
    }
  },
  methods: {
    updateChecked(id) {
      this.todos.forEach(todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      })
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    clearDone() {
      this.todos = this.todos.filter(todo => todo.done === false)
    },
    updateTodo(id, title) {
      this.todos.forEach(todo => {
        if (todo.id === id) {
          todo.title = title
        }
      })
    }
  },
  mounted() {
    this.$bus.$on('updateChecked', this.updateChecked)
    this.$bus.$on('deleteTodo', this.deleteTodo)
    this.$bus.$on('clearDone', this.clearDone)
    this.$bus.$on('updateTodo', this.updateTodo)
  },
  beforeDestroy() {
    this.$bus.$off('updateChecked')
    this.$bus.$off('deleteTodo')
    this.$bus.$off('clearDone')
    this.$bus.$off('updateTodo')
  },
  watch: {
    todos: {
      //必须开启深度监视才能监视对象属性的变化
      deep: true,
      handler(value) {
        console.log('数据变化了：' + JSON.stringify(value))
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
