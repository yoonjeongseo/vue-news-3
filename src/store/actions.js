import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';
//api 참고하기 때문에 

export default { 
  FETCH_NEWS(context) { 
    fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
        
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