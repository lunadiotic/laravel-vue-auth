import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
      authStatus: false,
      user: null
  },
  mutations: {
      SET_AUTHENTICATED (state, value) {
          state.authStatus = value
      },

      SET_USER(state, value) {
          state.user = value
      }
  },
  actions: {
      async login ({ dispatch }, credentials) {
        await axios.get('http://localhost:8000/sanctum/csrf-cookie')
        await axios.post('http://localhost:8000/login', credentials)
        dispatch('user')   
      },

      async logout ({ commit }) {
        await axios.post('http://localhost:8000/logout')
        commit('SET_AUTHENTICATED', false)
        commit('SET_USER', null)
      },

      async user ({ commit }) {
          await axios.get('http://localhost:8000/api/user')
            .then((result) => {
                commit('SET_AUTHENTICATED', true)
                commit('SET_USER', result.data)
            }).catch((err) => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', null)
            })
      }
  },
})
