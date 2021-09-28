<template>
  <div class="demo">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="sendStudentName">向APP组件传送数据</button>
    <button @click="show">测试父组件绑定事件</button>
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
      this.$emit('studentEvent', this.name, 3, 4, 5)
    }
  }
}
</script>

<style scoped>
.demo {
  background-color: greenyellow;
}
</style>
