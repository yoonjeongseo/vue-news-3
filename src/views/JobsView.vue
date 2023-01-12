<template>
  <div>
    <div v-for="job in this.$store.state.jobs">{{ job.title }}</div>
  </div>
</template>

<script>
// import { fetchJobsList } from '../api/index.js';

export default {
//  data() {
//   return {
//     jobs: []
//   }
//  },
 created() {
    this.$store.dispatch('FETCH_JOBS');
//   var vm = this;
//   fetchJobsList()
//     // .then(function(response){
//     //   vm.jobs = response.data
//     // })
//     // .catch(function(error){
//     //   console.log(error);
//     // })
//     .then(response => this.jobs = response.data)
//     .catch(error => console.log(error));
//     //es6 화살표 함수적용
 }
}
</script>

<style>

</style>