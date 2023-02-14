<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// import { create } from "domain";
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>
