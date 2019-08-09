export default {
    //命名空间
    namespaced: true,
    state: {
        longitude: "113.324520",
        latitude: "23.099994"
    },
    mutations: {
        updateLocation(state, payload) {
            state.longitude = payload.longitude
            state.latitude = payload.latitude
        }
    },
    actions: {
        getLocation({ commit }, payload) {
            wx.getLocation({
                type: 'wgs84',
                success(res) {
                    console.log('44',res)
                    commit('updateLocation', res)
                }
            })
        }

    }
}