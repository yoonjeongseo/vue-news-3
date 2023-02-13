<template>
  <div>
    <section>
      <!-- 사용자 상세 정보 -->
      <user-profile :info="fetchedItem">
        <div slot="username">{{ fetchedItem.user }}</div>
        <template slot="time">
          {{ fetchedItem.time_ago }}
        </template>
      </user-profile>

      <!-- <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div> -->
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>

    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content">
        <!-- {{ fetchedItem.content }} -->
      </div>
    </section>
    <!-- {{ this.$store.state.item }} -->
    <!-- 데이터에 대한 모든정보 가져오기 -->

    <!-- <p>{{ this.$store.state.item.title }}</p>
    <div>
      {{ this.$store.state.item.content }}
    </div> -->

    <!-- <p>{{ fetchedItem.title }}</p>
    <div>
      {{ fetchedItem.content }}
    </div> -->
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    console.log(this.$route.params.id);

    const itemId = this.$route.params.id;

    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>