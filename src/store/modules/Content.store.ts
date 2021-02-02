/**
 * Vuex store module for caching Wizard Input Field data
 * Holds state for:
 * - values: hashmap of wizardInput values
 * - validationStates: Holds validity state for the corresponding input instances and its affiliated wizard step
 * */

import Vue from 'vue'
import { ActionContext } from 'vuex'
import { Dictionary } from '@/types/Collections.type'

interface IContentState {
  welcomeMsg: string
  sharedContents: Dictionary<string>
}

const state: IContentState = {
  welcomeMsg: '',
  sharedContents: {}
}

const getters = {
  getWelcomeMsg: (state: IContentState) => state.welcomeMsg,
  getSharedContentById: (state: IContentState) => (id: string) => state.sharedContents[id],
  getSharedContents: (state: IContentState) => state.sharedContents
}

const mutations = {
  setWelcomeMsg: (state: any, value: string) => {
    state.welcomeMsg = value
  },
  setSharedContentById: (state: any, { id, value }: any) => {
    Vue.set(state.shareContents, id, value)
  },
  setSharedContents: (state: any, contents: Dictionary<string>) => {
    state.shareContents = contents
  },
  updateSharedContents: (state: any, updatedContents: Dictionary<string>) => {
    state.sharedContents = { ...state.sharedContents, ...updatedContents }
  },
  clearWelcomeMsg: (state: any) => {
    delete state.welcomeMsg
  },
  clearSharedContents: (state: any) => {
    state.sharedContents = {}
  }
}

const actions = {
  setWelcomeMsg ({ commit }: ActionContext<IContentState, any>, value: string) {
    commit('setWelcomeMsg', value)
  },
  setSharedContentById ({ commit }: ActionContext<IContentState, any>, { id, value }: any) {
    commit('setSharedContentById', { id, value })
  },
  setSharedContents ({ commit }: ActionContext<IContentState, any>, contents: Dictionary<string>) {
    commit('setSharedContents', contents)
  },
  updateSharedContents ({ commit }: ActionContext<IContentState, any>, contents: Dictionary<string>) {
    commit('updateSharedContents', contents)
  },
  clearWelcomeMsg ({ commit }: ActionContext<IContentState, any>) {
    commit('clearWelcomeMsg')
  },
  clearSharedContents ({ commit }: ActionContext<IContentState, any>) {
    commit('clearSharedContents')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
