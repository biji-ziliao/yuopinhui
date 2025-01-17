import { getBaseCategoryList, getBannerList,getFloorList } from '@/api'

export default {
  // 开启命名空间
  // namespaced: true,
  //仓库存储数据的地方
  state: {
    categoryList: [],
    Banner: [],
    FloorList:[]
  },
  //可理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加的方便
  getters: {
    // categories: (state) => state.categoryList,
    // banners: (state) => state.Banner,
  },
  //用户修改state中的数据
  mutations: {
    CATEGORYLIST(state, categoryList) {
      state.categoryList = categoryList
    },
    BANNER(state, Banner) {
      state.Banner = Banner
    },
    FLOORLIST(state, FloorList) {
      state.FloorList = FloorList
    }
  },
  //处理actions 可以书写自己的业务逻辑，也可以处理异步
  actions: {
    async categoryList({ commit }) {
      let result = await getBaseCategoryList()
      if (result.code === 200) {
        commit('CATEGORYLIST', result.data)
      }
    },
    async Banner({ commit }) {
      let result = await getBannerList()
      if (result.code === 200) {
        commit('BANNER', result.data)
      }
    },
    async FloorList({ commit }) {
      let result = await getFloorList()
      if (result.code === 200) {
        commit('FLOORLIST', result.data)
      }
    }


  },
  modules: {
  }
}
