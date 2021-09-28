<template>
  <div class="demo">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="sendStudentName">向School组件传送数据</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

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
      pubsub.publish('hello', this.name)
    }
  }
}
</script>

<style scoped>
.demo {
  background-color: greenyellow;
}
</style>
