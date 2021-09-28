<template>
  <div>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校名称：{{ location }}</h2>
    <button @click="showName">测试混入属性</button>
  </div>
</template>

<script>
  import {mixin1} from '../mixin.js'
  export default {
    name: 'School',
    data () {
      return {
        name:'Peking',
        location: 'Beijing'
      }
    },
    mixins:[mixin1]
  }
</script>

<style>

</style>
