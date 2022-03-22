<template>
  <div>
    <h1>count组件</h1>
    <button @click="add">+1</button>
    <div>count: {{ $store.getters.count }}</div>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit('addCount', 1)
    }
  }
}
</script>

<style>

</style>