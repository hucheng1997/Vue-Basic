<template>
  <div>
    <ul>
      <li>
        <a href="/message1">message001</a>&nbsp;&nbsp;
      </li>
      <li>
        <a href="/message2">message002</a>&nbsp;&nbsp;
      </li>
      <li>
        <a href="/message/3">message003</a>&nbsp;&nbsp;
      </li>
    </ul>
    <h2>{{$route.query.id}}</h2>
  </div>
</template>

<script>
export default {
  name: "Message",
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>
