<template>
  <div id="app">
    <tool-bar></tool-bar>

    <!-- url이 router이 떄문에 router-view태그를 사용 -->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
