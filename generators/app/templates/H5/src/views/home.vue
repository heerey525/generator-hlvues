<template>
  <div>
    <h1>主页</h1>
    <router-link to="/child">子页面</router-link>
    <br />
    <router-link to="/">回主页</router-link>
    <br />
    <router-view />
    <HelloWorld msg="HelloWorld"></HelloWorld>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      active: 0,
    }
  },
}
</script>

<style></style>
