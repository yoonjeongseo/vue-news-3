export default {
  SET_NEWS(state, news) { //mutations에서 state로 값을 넘기려면 state로 인자를 처음에 받아야한다.
    state.news = news;
  },
  SET_ASK(state, ask) {
    state.ask = ask;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_ITEM(state, item) {
    state.item = item
  },
  SET_LIST(state, list) {
    state.list = list;
  }
}