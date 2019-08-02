import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'My Custom Title',
    links: [
      'http://test.com',
      'http://hello.com',
      'http://cats.com',
    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    }
  },
  actions: {

  },
});
