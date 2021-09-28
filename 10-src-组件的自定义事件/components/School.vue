<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校名称：{{ location }}</h2>
    <button @click="sendSchoolName">向APP组件传送数据</button>
    <button @click="unbind">解绑schoolEvent</button>
    <button @click="death">销毁VC实例</button>
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
  methods: {
    sendSchoolName() {
      //触发绑定在父组件绑定在子组件的事件，后面跟下
      this.$emit('schoolEvent', this.name, 1, 2, 3)
    },
    unbind() {
      //解绑具体事件
      // this.$off('schoolEvent')
      //解绑多个事件
      // this.$off(['schoolEvent', 'testEvent'])
      //解绑所有事件
      this.$off()
    },
    death() {
      //销毁VueComponent实例
      this.$destroy()
    }
  }
}
</script>

<style>
.demo {
  background-color: aqua;
}
</style>
