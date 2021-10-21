<template>
  <div>
    <ul v-for="m in messageList" :key="m.id">
      <li>
        <router-link :to="{
          name:'xxx',
          params:{
            id:m.id,
            title:m.title
         }
        }">{{m.title}}
        </router-link>
      </li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        {id: '1', title: '消息001'},
        {id: '2', title: '消息002'},
        {id: '3', title: '消息003'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
