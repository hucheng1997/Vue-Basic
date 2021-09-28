<template>
  <div>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age+1 }}</h2>
    <h2>家乡：{{ home }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        name: 'Joker',
        age: this.parent_age,
        home: 'Beijing'
      }
    },
    //1、简单的声明接收
    // props:['name','age','home'],
    //2、对数据类型进行限制
    // props: {
    //   name: String,
    //   age: Number,
    //   home: String
    // },

    //3、接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    props: {
      name: {
        type: String, //name的类型是字符串
        required: true, //name是必要的
      },
      parent_age: {
        type: Number,
        default: 99 //默认值
      },
      home: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>

</style>
