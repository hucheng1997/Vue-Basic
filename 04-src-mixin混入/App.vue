<template>
  <div id="app">
    <h1 ref="msg">{{msg}}</h1>
    <Student />
    <School />
  </div>
</template>

<script>
  import School from './components/School.vue'
  import Student from './components/Student.vue'

  export default {
    name: 'App',
    components: {
      School,
      Student
    },
    data() {
      return {
        msg: '----Vue学习----'
      }
    }
  }
</script>

<style>
</style>
