import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js';
//api 참고하기 때문에 

export default { 
  // FETCH_NEWS(context) { 
  //   fetchNewsList()
  //     .then(response => {
  //       context.commit('SET_NEWS', response.data);
  //       return response;
  //       // 데이터를 받아와서 꺼내주고 return을 통해 화면으로 계속 데이터를 보낸다
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  // FETCH_ASK({ commit }) {
  //   fetchAskList()
  //     .then(({ data }) => {
  //       commit('SET_ASK', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  // FETCH_JOBS({ commit }) {
  //   fetchJobsList()
  //     .then(({ data }) => {
  //       commit('SET_JOBS', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  FETCH_USER({ commit },  name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName) 
      .then(({ data }) => commit('SET_LIST', data))
      .catch(error => console.log(error))
  }
}