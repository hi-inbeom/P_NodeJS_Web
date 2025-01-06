<template>
  <AppHeader></AppHeader>
  <!-- <PostList></PostList> -->
</template>

<script>
import AppHeader from './components/common/AppHeader.vue'
// import PostList from './components/post/PostList.vue';

export default {
  name: 'App',
  components: {
    // PostList,
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
