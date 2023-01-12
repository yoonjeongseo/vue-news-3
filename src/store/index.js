import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';



Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: []
  },
  getters: { //computed와 동일한 속성이지만 store에만 있음
    fetchedAsk(state) {
      return state.ask;
    }
  },
  mutations: {
    SET_NEWS(state, news) { //mutations에서 state로 값을 넘기려면 state로 인자를 처음에 받아야한다.
      state.news = news;
      //state안에 news에 받아온 데이터 news(받아온 데이터이름 짓기)를 넣는다
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    }
  }, //actions에서 바로 state로 접근이 불가능하기 떄문에 mutations를 이용해서 actions에서 받아온 데이터를 mutations으로 넘긴다.
  actions: { //actions에서 FETCH_NEWS를 호출
    FETCH_NEWS(context) { //context는 인자
      fetchNewsList()
        .then(response => {
          // console.log(response.data);
          context.commit('SET_NEWS', response.data);
          //SET_NEWS를 실행할 때 response.data룰 SET_NEWS로 넘긴다

          // state.news = response.data;
        })
        .catch(error => {
          console.log(error);
        })
    },
    FETCH_ASK({ commit }) {
      fetchAskList()
        .then(({ data }) => {
          commit('SET_ASK', data);
        })
        .catch(error => {
          console.log(error);
        })
    },
    FETCH_JOBS({ commit }) {
      fetchJobsList()
        .then(({ data }) => {
          commit('SET_JOBS', data);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
})