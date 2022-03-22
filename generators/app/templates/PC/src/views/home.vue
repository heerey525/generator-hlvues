<template>
  <div>
    <h1>主页</h1>
    <router-link to="/child">子页面</router-link><br>
    <router-link to="/">回主页</router-link><br>
    <router-view />
    <HelloWorld msg="HelloWorld"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>