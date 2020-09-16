import Vue from 'vue'
import Vuex from 'vuex'
import { api, sandbox } from '../Services/AxiosService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    spellResults: [],
    spellDetails: {}
  },
  mutations: {
    setApiSpells(state, spells) {
      state.spellResults = spells
    },
    setSpellDetails(state, spell) {
      state.spellDetails = spell
    }
  },
  actions: {
    async spellSearch({ commit }) {
      let res = await api.get("spells")
      commit("setApiSpells", res.data.results)
      commit("setSpellDetails", {})
    },
    async setSpellDetails({ commit }, spellIndex) {
      let res = await api.get("spells/" + spellIndex)
      commit("setSpellDetails", res.data)

    }

  },
  modules: {
  }
})
