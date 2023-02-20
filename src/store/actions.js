import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js';
//api 참고하기 때문에 

export default { 
  //promise
  // FETCH_NEWS(context) { 
  //   return fetchNewsList()
  //     .then(response => {
  //       context.commit('SET_NEWS', response.data);
  //       return response;
  //       // 데이터를 받아와서 꺼내주고 return을 통해 화면으로 계속 데이터를 보낸다
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },

  //async
  async FETCH_NEWS(context) { 
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },


  // FETCH_ASK({ commit }) {
  //   return fetchAskList()
  //     .then(({ data }) => {
  //       commit('SET_ASK', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },

  async FETCH_ASK({ commit }) {
    try {
      const response =  await fetchAskList();
      commit('SET_ASK', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },


  // FETCH_JOBS({ commit }) {
  //   return fetchJobsList()
  //     .then(({ data }) => {
  //       commit('SET_JOBS', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },


  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList();
      commit('SET_JOBS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },


  FETCH_USER({ commit },  name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  // #2
  FETCH_LIST({ commit }, pageName) {
    // #3
    return fetchList(pageName) 
      .then(response => {
        // #4
        // console.log(4);
        commit('SET_LIST', response.data);
        return response;
      })
      .catch(error => console.log(error))
  }
}



