<template>
  <div>
    <ul>
      <li v-for="p in personList" :key="p.index">{{ p }}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Count',
  computed: {
    ...mapState('personAbout', ['personList']),
  }
}
</script>

<style scoped>

</style>
