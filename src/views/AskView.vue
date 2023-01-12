<template>
  <div>
    <div v-for="item in fetchedAsk">{{ item.title }}</div>
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {

    // #3
    ...mapGetters([
      'fetchedAsk'
    ]), //fetchedAsk를 객체가 이닌 배열 표기법으로 바꿀수 있다

    
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk'
    // })

    // #2
    // ...mapState({
    //   ask: state => state.ask
    // })


    //#1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
    // var vm = this;
    // fetchAskList()
    //   .then(function(response){
    //     vm.asks = response.data
    //   })
    //   .catch(function(error){
    //     console.log(error);
    //   })
  }
}
</script>

<style>

</style>