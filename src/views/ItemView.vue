<template>
  <div>
    <!-- {{ this.$store.state.item }} -->
    <!-- 데이터에 대한 모든정보 가져오기 -->

    <p>{{ this.$store.state.item.title }}</p>
    <div>
      {{ this.$store.state.item.content }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params.id);

    const itemId = this.$route.params.id;

    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style>

</style>