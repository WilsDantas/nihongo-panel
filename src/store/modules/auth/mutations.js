export default {
    AUTH_USER_OK(state, user) {
        state.me = user
    },

    AUTH_USER_LOGOUT(state) {
        state.me = {
            
        }
    },
}