<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.done" @change="updateChecked(todoObj.id)"/>
      <span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
      <input type="text" :value="todoObj.title" v-show="todoObj.isEdit" @blur="handleBlur(todoObj,$event)" ref="inputTitle">
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todoObj.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todoObj)" v-show="!todoObj.isEdit">编辑</button>
  </li>

</template>

<script>
export default {
  name: 'UserItem',
  props: ['todoObj'],
  methods: {
    handleEdit(todoObj) {
      if (todoObj.hasOwnProperty('isEdit')) {
        todoObj.isEdit = true
      } else {
        this.$set(todoObj, 'isEdit', true)
      }
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
      // this.$refs.inputTitle.focus()
    },
    handleBlur(todoObj, e) {
      todoObj.isEdit = false
      if (!e.target.value.trim()) {
        return '输入标题不能为空！'
      }
      this.$bus.$emit('updateTodo', todoObj.id, e.target.value)
    },
    deleteTodo(id) {
      this.$bus.$emit('deleteTodo', id)
    },
    updateChecked(id) {
      this.$bus.$emit('updateChecked', id)
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
