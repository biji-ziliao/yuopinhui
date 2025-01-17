<template>
  <div>
    <Header></Header>
    <!-- 路由组件的出口 -->
    <router-view></router-view>
    <Footer></Footer>
    <!-- <Footer v-show="$route.meta.show"></Footer> -->
  </div>
</template>

<script>

// 引入header
import Header from "./components/Header";
// 引入Footer
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Header, Footer },
  mounted(){
    this.$store.dispatch('categoryList')
  }
};
</script> 
<style></style>
