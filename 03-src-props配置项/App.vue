<template>
  <div id="app">
    <h1 ref="msg">{{msg}}</h1>
    <Student name="Frank" :parent_age="14" home="Shanghai"/>
  </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    Student
  },
  data(){
    return{
      msg:'----Vue学习----'
    }
  }
}
</script>

<style>
</style>
