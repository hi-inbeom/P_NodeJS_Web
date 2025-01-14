<template>
  <div class="header">
    <AppHeader/>
  </div>
  <div class="content">
    <div class="sidebar">
      <LeftBar/>
    </div>
    <div class="home-content">
      <BoardList/>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/common/AppHeader.vue'
import BoardList from './components/board/BoardList.vue'
import LeftBar from './components/side/LeftBar.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    BoardList,
    LeftBar
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

body {
  width: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  height: 80px;
  border-bottom: 1px solid rgb(169, 169, 169);
  padding: 0px 15px;
  /* background-color: brown;
  opacity: 0.3; */
}

.content {
  flex: 1; /* 부모 요소의 남은 공간을 채움 */
  display: flex;
}

.sidebar {
  width: 15%;
  border-right: 1px solid rgb(169, 169, 169);
  padding-top: 25px;
  background-color: red;
  opacity: 0.3;
}

.home-content {
  flex: 1;
  display: flex;
  justify-content: center;
  padding-top: 25px;
  background-color: blue;
  opacity: 0.3;
}
</style>
