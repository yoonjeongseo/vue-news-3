<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
// import ListMixin from '../mixins/ListMixin.js';
import bus from '../utils/bus.js';



export default {
  components: {
    ListItem,
  },
  // mixins: [ListMixin],
  mounted() { //인스턴스가 화면에 붙어있을 때, 그 시점에서 함수를 불러주는 라이프 사이클 훅
    bus.$emit('end:spinner');
  }
  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_ASK')
  //       .then(() => {
  //         console.log('fetched');
  //         bus.$emit('end:spinner');
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, 3000);

  // }
}
</script>