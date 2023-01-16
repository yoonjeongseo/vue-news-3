<template>
  <div>
    <!-- <div v-for="item in fetchedAsk">{{ item.title }}</div> -->


    <p v-for="item in fetchedAsk">
      <!-- <a v-bind:href="item.url"></a> 아래는 축약문법 -->
      <!-- <a :href="item.url">
        {{ item.title }}
      </a> -->
      <router-link v-bind:to="`item/${item.id}`">
        <!-- item.url로 받아오면 데이터가 다르게 받아져서 값을 맞춰서 가져오기 위해 ${item.id}값을 가져온다 -->
        
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {

    ...mapGetters([
      'fetchedAsk'
    ]), 
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>