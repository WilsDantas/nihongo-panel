import axios from 'axios'

const RESOURCE = 'categories'

export default {
    categories(context, params) {
        context.commit('SET_PRELOADER', true)
        context.commit('SET_TEXT_PRELOADER', 'Carregando...')
        return new Promise((resolve, reject) => {
            axios.get(`categories/paginate/${params.per_page}/${params.search}/?page=${params.page}`)
                .then(response => {
                    context.commit('SET_CATEGORIES', response.data)
                    resolve()
                }).catch(error => reject(error))
                .finally(() => context.commit('SET_PRELOADER', false))
        })
    },

    storeCategory(context, params) {
        context.commit('SET_PRELOADER', true)
        context.commit('SET_TEXT_PRELOADER', 'Cadastrando Categoria...')
        return new Promise((resolve, reject) => {
            axios.post(`${RESOURCE}`, params)
                .then(response => {
                    resolve()
                }).catch(error => reject(error))
                .finally(() => context.commit('SET_PRELOADER', false))
        })
    },

    destroyCategory({ commit }, params) {
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Deletando Categoria...')
        return new Promise((resolve, reject) => {
            axios.delete(`${RESOURCE}/${params.identify}`)
                .then(() => resolve())
                .catch(error => reject(error))
                .finally(() => commit('SET_PRELOADER', false))
        })
    },

    editCategory(context, params) {
        context.commit('SET_PRELOADER', true)
        context.commit('SET_TEXT_PRELOADER', 'Atualiazando Categoria...')
        return new Promise((resolve, reject) => {
            axios.put(`${RESOURCE}/${params.identify}`, params)
                .then(() => {resolve()})
                .catch(error => reject(error))
                .finally(() => context.commit('SET_PRELOADER', false))
        })
    },
}