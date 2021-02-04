export const state = {
    preloader: false,
    textPreLoader: 'Carregando...',
}

export const mutations = {
    SET_PRELOADER(state, status) {
        state.preloader = status,
            state.textPreLoader = 'Carregando...'
    },
    SET_TEXT_PRELOADER(state, text) {
        state.textPreLoader = text
    },
}