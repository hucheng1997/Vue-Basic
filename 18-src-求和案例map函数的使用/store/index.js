import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//actions：用于响应组件中的动作
const actions = {
  addOdd(context, value) {
    console.log('actions中的addOdd方法被调用')
    if (context.state.sum % 2) {
      context.commit('ADD', value)
    }
  },
  addWait(context, value) {
    console.log('actions中的addWait方法被调用')
    setTimeout(() => {
      context.commit('ADD', value)
    }, 1000)
  }
}

//mutations：操作数据
const mutations = {
  ADD(state, value) {
    console.log('mutation中的add方法被调用')
    state.sum += value
  },
  SUB(state, value) {
    console.log('mutation中的sub方法被调用')
    state.sum -= value
  }
}

//state:存储数据
const state = {
  sum: 0
}

//
const getters = {
  tenSize(){
    return state.sum * 10
  }
}
//创建并暴露Store
export default new Vuex.Store({
  actions, mutations, state, getters
})
