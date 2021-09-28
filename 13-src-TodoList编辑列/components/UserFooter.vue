<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{ doneCount }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'UserFooter',
  computed: {
    doneCount() {
      return this.todos.reduce((pre, todo) => todo.done === true ? pre + 1 : pre, 0)
    },
    isAll: {
      get() {
        return this.doneCount === this.todos.length && this.todos.length !==0
      },
      set(val) {
        this.todos.forEach(todo =>
          todo.done = val
        )
      }
    }
  },
  methods:{
    clearDone(){
      this.$bus.$emit('clearDone')
    }
  },
  props: ['todos']
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
