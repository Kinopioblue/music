import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        profile: {
            avatarUrl: "",
            userId: "",
        },
        music: {
            name: "",
            album: "",
            artist: "",
            mp3Url: "",
        },
    },
    getters: {

    },
    mutations: {
        //设置头像
        setAvatar(state) {
            state.profile.avatarUrl = localStorage.getItem("avatarUrl").split('"').join('');
        },
        playMusic(state, url) {
            state.music.mp3Url = url;
        }
    },
    actions: {},
    modules: {},
});