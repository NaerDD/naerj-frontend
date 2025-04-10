import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "noLogin",
    },
  }),
  actions: {
    getLoginUser({ commit, state }, payload) {
      // todo 改为远程请求登陆获取登录信息
      commit("updatedUser", payload);
    },
  },

  mutations: {
    updatedUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
