import axios from 'axios'

export default {
    categories(context) {
        context.commit('SET_PRELOADER', true)
        context.commit('SET_TEXT_PRELOADER', 'Carregando...')
        return new Promise((resolve, reject) => {
            axios.get('categories')
                .then(response => {
                    context.commit('SET_CATEGORIES', response.data.data)
                    resolve()
                }).catch(error => reject(error))
                .finally(() => context.commit('SET_PRELOADER', false))
        })
    },

    storeCategory(context, params) {
        context.commit('SET_PRELOADER', true)
        context.commit('SET_TEXT_PRELOADER', 'Cadastrando Categoria...')
        return new Promise((resolve, reject) => {
            axios.post('categories', params)
                .then(response => {
                    resolve()
                }).catch(error => reject(error))
                .finally(() => context.commit('SET_PRELOADER', false))
        })
    },
}