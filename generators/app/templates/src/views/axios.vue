<template>
  <div>
    <h1>axios</h1>
    <p>用户名： {{userInfo.login}}</p>
    <p>口号： {{userInfo.bio}}</p>
    <p>城市： {{userInfo.location}}</p>
  </div>
</template>

<script>
import { getUserInfo } from '@/api'
export default {
  data() {
    return {
      userInfo: {}
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      getUserInfo()
       .then(res => {
          this.userInfo = res.data
       })
    }
  }
}
</script>

<style>

</style>