// index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
// import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';


Vue.use(VueRouter);

 export const router =  new VueRouter({
  mode: 'history',
  //해시값 제거
  routes: [
    {
      path: '/',
      redirect: '/news', //페이지를 들어가자마자 보이도록 설정하는 속성
    },
    {
      //path: url 주소
      path: '/news',
      //component: url 주소로 갔을 때 표시될 컴포넌트
      component: NewsView,
      name: "news",
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: '/ask',
      component: AskView,
      name: "ask",
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: '/jobs',
      component: JobsView,
      name: "jobs",
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '/user/:id', //user에 대한 id를 넘긴다
      component: UserView,
    },
  ]
})