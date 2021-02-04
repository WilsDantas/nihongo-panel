import axios from 'axios'
import { TOKEN_NAME } from '@/configs/api'

export default {
    login(context, params) {
        context.commit('SET_PRELOADER', true)
        context.commit('SET_TEXT_PRELOADER', 'Logando...')
        return new Promise((resolve, reject) => {
            axios.post('/auth/token', params)
                .then(response => {
                    context.commit('AUTH_USER_OK', response.data.user)
                    const token = response.data.token
                    localStorage.setItem(TOKEN_NAME, token)
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                    resolve()
                }).catch(error => reject(error))
                .finally(() => context.commit('SET_PRELOADER', false))
        })
    },

    checkLogin(context) {
        context.commit('SET_PRELOADER', true)
        context.commit('SET_TEXT_PRELOADER', 'Carregando Dados...')

        return new Promise((resolve, reject) => {
            const token = localStorage.getItem(TOKEN_NAME)
            if (!token) {
                context.commit('SET_PRELOADER', false)
                return reject()
            } else {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                axios.get('/auth/me', {
                    headers: { 'Authorization': `Bearer ${token}` }
                })
                    .then(response => {
                        context.commit('AUTH_USER_OK', response.data.data)
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                        resolve()
                    }).catch(error => reject(error))
                    .finally(() => context.commit('SET_PRELOADER', false))
            }
        })

    },

    logout(context) {
        context.commit('SET_PRELOADER', true)
        context.commit('SET_TEXT_PRELOADER', 'Deslogando...')
        return new Promise((resolve, reject) => {
            
            const token = localStorage.getItem(TOKEN_NAME)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

            if (!token) {
                return reject()
            } else {
                axios.post('/auth/logout')
                    .then(response => {
                        localStorage.removeItem(TOKEN_NAME)
                        resolve()
                    })
                    .catch(error => reject(error))
                    .finally(() => context.commit('SET_PRELOADER', false))
            }
        })
    }
}