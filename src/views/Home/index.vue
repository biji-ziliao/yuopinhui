<template>
  <div>
    <TypeNav />
    <!--列表-->
    <ListContainer />
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
    <Floor v-for="item in FloorList" :key="item.id" :floorData="item" />
    <!--商标-->
    <Brand />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import TypeNav from '@/components/TypeNav'
import Brand from './Brand/Brand'
import Floor from './Floor/Floor'
import Like from './Like/Like'
import ListContainer from './ListContainer/ListContainer'
import Rank from './Rank/Rank'
import TodayRecommend from './TodayRecommend/TodayRecommend'
export default {
  name: 'Home',
  components: {
    TypeNav,
    Brand,
    Floor,
    Like,
    ListContainer,
    Rank,
    TodayRecommend
  },
  mounted() {
    this.$store.dispatch('FloorList')
  },
  computed: {
    ...mapState({
      FloorList: state => {
        return state.home.FloorList
      }
    })
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
