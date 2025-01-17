import { getItemSkuId } from '@/api'

export default {
  state: {
    detail: {}
  },
  getters: {
    categoryView(state) {
      return state.detail.categoryView || {}
    },
    skuInfo(state) {
      return state.detail.skuInfo || {}
    },
    skuSaleAttrValueList(state) {
      return state.detail.skuInfo.skuSaleAttrValueList || []
    }
  },
  mutations: {
    DETAIL(state, detail) {
      state.detail = detail
    }
  },
  actions: {
    async detail({ commit }, skuid) {
      let result = await getItemSkuId(skuid)
      if (result.code === 200) {
        commit('DETAIL', result.data)
      }
    }

  }
}