<template>
  <div>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>家乡：{{ home }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        name: 'Joker',
        age: 12,
        home: 'Beijing'
      }
    }
  }
</script>

<style>

</style>
