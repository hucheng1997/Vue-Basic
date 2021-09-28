<template>
  <div id="app">
    <Student ref="student" @click.native="show"/>
    <School @schoolEvent="getSchoolName"/>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  /**
   * 实现需求：子组件传递数据至父组件
   *
   */
  name: 'App',
  components: {
    School,
    Student
  },
  methods: {
    getSchoolName(name, ...params) {
      alert('App收到了学校名：' + name + '参数：' + params)
    },
    getStudentName(name, ...params) {
      alert('App收到了学生名：' + name + '参数：' + params)
    },
    show(){
      alert(this.$options.name)
    }
  },
  mounted() {
    // this.$refs.student.$on('studentEvent', this.getStudentName)
    this.$refs.student.$on('studentEvent', this.getStudentName)
  }
}
</script>

<style>
</style>
