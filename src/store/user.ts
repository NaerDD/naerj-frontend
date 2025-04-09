import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
    },
  }),
  actions: {
    getLoginUser({ commit, state }, payload) {
      commit("updatedUser", { userName: "纳尔" });
    },
  },

  mutations: {
    updatedUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
