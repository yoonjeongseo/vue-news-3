<template>
  <div id="app">
    <tool-bar></tool-bar>

    <!-- css 트랜지션기능 -->
    <Transition name="page">

      <!-- url이 router이 떄문에 router-view태그를 사용 -->
      <router-view></router-view>

    </Transition>
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
/* router transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
