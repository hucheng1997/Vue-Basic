<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校名称：{{ location }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'School',
  data() {
    return {
      name: 'Peking',
      location: 'Beijing'
    }
  },
  mounted() {
    this.pubId = pubsub.subscribe('hello', (msgName, data) => {
      console.log('我是School组件，通过事件' + msgName + '收到了数据' + data)
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style>
.demo {
  background-color: aqua;
}
</style>
