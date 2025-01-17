import { postSearchList } from '@/api'



export default {
  //仓库存储数据的地方
  state: {
    searchList: {}
  },
  //可理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加的方便
  getters: {
    attrsList(state) {
      return state.searchList.attrsList || []
    },
    goodsList(state) {
      return state.searchList.goodsList || []
    },
    trademarkList(state) {
      return state.searchList.trademarkList || []
    }
  },
  //用户修改state中的数据
  mutations: {
    SEARCHLIST(state, searchList) {
      state.searchList = searchList
    }
  },
  //处理actions 可以书写自己的业务逻辑，也可以处理异步
  actions: {
    async searchList({ commit }, params = {}) {
      let result = await postSearchList(params)
      if (result.code === 200) {
        commit('SEARCHLIST', result.data)
      }
    }
  }
}