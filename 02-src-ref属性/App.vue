<template>
  <div id="app">
    <h1 ref="msg">{{msg}}</h1>
    <School ref="school"/>
    <button @click="showDom">showDom</button>
  </div>
</template>

<script>
import School from './components/School.vue'

export default {
  name: 'App',
  components: {
    School
  },
  data(){
    return{
      msg:'----Vue学习----'
    }
  },
  methods:{
    showDom(){
      console.log(this.$refs.school)
      console.log(this.$refs.msg)
    }
  }
}
</script>

<style>
</style>
