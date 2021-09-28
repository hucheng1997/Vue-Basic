<template>
  <div class="demo">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="sendStudentName">向School组件传送数据</button>
    <button @click="test">测试内置关系</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: 'Joker',
      age: 12
    }
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit('hello', this.name)
    },
    test(){
      console.log(this.__proto__.x)
    }
  }
}
</script>

<style scoped>
.demo {
  background-color: greenyellow;
}
</style>
