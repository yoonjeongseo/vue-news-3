import axios from 'axios';
//import는 package.json의 axios라는 라이브러리를 들고온다

//1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

//2. API 함수들을 정리
async function fetchNewsList() {
  // return axios.get(config.baseUrl + 'news/1.json');
  try {
    return await axios.get(`${config.baseUrl}news/1.json`);
  } catch (error) {
    console.log(error);
  }
}
function fetchJobsList() {
  try {
    return axios.get(`${config.baseUrl}jobs/1.json`);
  } catch (error) {
    console.log(error);
  }
}
async function fetchAskList() {
  try {
    const response = await axios.get(`${config.baseUrl}ask/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
async function fetchList(pageName) {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}



function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchCommentItem(itemId) {
  return axios.get(`${config.baseUrl}item/${itemId}.json`);
}

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchList,
  fetchUserInfo,
  fetchCommentItem
}