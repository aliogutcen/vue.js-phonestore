import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      phones: [],
    };
  },
  mutations: {
    ADD_PHONE(state, phone) {
      state.phones.push(phone);
      console.log("Current phones after adding:", state.phones);
    },
  },
  actions: {
    addPhone({ commit, state }, phone) {
      commit("ADD_PHONE", phone);
      console.log("Current phones after adding:", state.phones);
    },
  },
  getters: {
    getPhones: (state) => state.phones,
  },
});
