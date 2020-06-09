import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state in the vuex store is shared across all components
  state: {
    title: 'My Custom Title',
    links: [
      'http://google.com',
      'http://coursetro.com',
      'http://youtube.com'
    ]
  },
  // getters get the data from state and allow you to perform computations on it
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  // mutations let you change the data in state
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1)
    },
    REMOVE_ALL: (state) => {
      state.links = [];
    }
  },
  // use actions for asynchronous functionality
  actions: {
    removeLink: (context, link) => {
      context.commit('REMOVE_LINK', link)
    },
    // uses object destructuring to call commit without context
    // this example waits 1.5 seconds and then calls REMOVE_ALL mutation
    removeAll({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    }
  },
  modules: {
  }
})
