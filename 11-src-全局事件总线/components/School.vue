<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校名称：{{ location }}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: 'Peking',
      location: 'Beijing'
    }
  },
  mounted() {
    console.log('School', this)
    console.log('School', this.$bus)
    this.$bus.$on('hello', (data) => {
      console.log('我是School组件，收到了数据' + data)
    })
  },
  methods: {}
}
</script>

<style>
.demo {
  background-color: aqua;
}
</style>
