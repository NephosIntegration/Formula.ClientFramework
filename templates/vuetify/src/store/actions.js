// https://vuex.vuejs.org/en/actions.html
import axios from 'axios'

// The login action passes vuex commit helper that we will use to trigger mutations.
export default {
  login ({ commit }, userData) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios.post('https://localhost:5001/account/login', { userName: userData.username, password: userData.password })
        .then(response => {
          const token = response.data.data.userName
          const user = response.data.data.userName
          console.log(response)
          // storing jwt in localStorage. https cookie is safer place to store
          localStorage.setItem('token', token)
          localStorage.setItem('user', user)
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
          // mutation to change state properties to the values passed along
          commit('auth_success', { token, user })
          resolve(response)

          axios.get('https://localhost:5001/todo')
          .then( response => {
            console.log(response);
          });
        })
        .catch(err => {
          console.log('login error')
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
    })
  },
  logout ({ commit }) {
    return new Promise((resolve) => {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  },
  refreshtoken ({ commit }) {
    axios.get('/refresh')
      .then(response => {
        const token = response.data.access_token
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
        commit('auth_success', { token })
      })
      .catch(error => {
        console.log('refresh token error')
        commit('logout')
        localStorage.removeItem('token')
        console.log(error)
      })
  },

  // autoRefreshToken ({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     setInterval(function () {
  //       // code goes here that will be run every 20 minutes.
  //       axios.get('/refresh')
  //         .then(response => {
  //           const token = response.data.access_token
  //           localStorage.setItem('token', token)
  //           axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  //           commit('auth_success', { token })
  //           resolve(response)
  //         })
  //         .catch(error => {
  //           console.log('refresh token error')
  //           console.log(error)
  //           reject(error)
  //         })
  //     }, 1200000)
  //   }
  //   )
  // },

}
