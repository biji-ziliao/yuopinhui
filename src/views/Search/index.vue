<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li
              class="with-x"
              v-if="this.searchParams.categoryName"
              @click="removeCategoryName"
            >
              {{ this.searchParams.categoryName }}<i>×</i>
            </li>
            <li
              class="with-x"
              v-if="this.searchParams.keyword"
              @click="removeKeyword"
            >
              {{ this.searchParams.keyword }}<i>×</i>
            </li>
            <li
              class="with-x"
              v-if="this.searchParams.trademark"
              @click="removeTrademark(e)"
            >
              {{ this.searchParams.trademark.split(":")[1] }}<i>×</i>
            </li>
            <li
              class="with-x"
              @click="removeAttrValue(index)"
              v-for="(prop, index) in this.searchParams.props"
              :key="prop.tmId"
            >
              {{ prop.split(":")[1] }}<i>×</i>
            </li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector @send-to-parent="receiveData" @attr-value="attrValue" />

        <!--details-->
        <div class="clearfix details">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li
                  @click="navbar('1')"
                  :class="this.searchParams.order.includes('1') ? 'active' : ''"
                >
                  <a
                    >综合<i v-show="this.searchParams.order.includes('1')">{{
                      this.searchParams.order.includes("asc") ? "⬆" : "⬇"
                    }}</i></a
                  >
                </li>
                <li
                  @click="navbar('2')"
                  :class="this.searchParams.order.includes('2') ? 'active' : ''"
                >
                  <a
                    >价格<i v-show="this.searchParams.order.includes('2')">{{
                      this.searchParams.order.includes("asc") ? "⬆" : "⬇"
                    }}</i></a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="item in goodsList" :key="item.id">
                <div class="list-wrap">
                  <div
                    class="p-img"
                    @click="$router.push(`/detail/${item.id}`)"
                  >
                    <a><img :src="item.defaultImg" /></a>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i> {{ item.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >{{ item.title }}</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command"
                      >已有<span>{{ item.hotScore }}</span
                      >人评价</i
                    >
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <pagnation
            :pageNo="pageNo"
            :pageSize="pageSize"
            :total="total"
            :totalPages="totalPages"
            @pageChange="handlePageChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import SearchSelector from "./SearchSelector/SearchSelector";
import TypeNav from "@/components/TypeNav";
export default {
  name: "Search",
  components: {
    SearchSelector,
    TypeNav,
  },
  data() {
    return {
      searchParams: {
        category1id: "",
        category2id: "",
        category3id: "",
        categoryName: "",
        keyword: "",
        order: "1:desc",
        pageNo: 1,
        pageSize: 10,
        props: [],
        trademark: "",
      },
    };
  },
  beforeMount() {
    Object.assign(this.searchParams, this.$route.query, this.$route.params);
  },
  mounted() {
    this.getData();
  },
  computed: {
    ...mapGetters(["goodsList"]),
    // ...mapGetters(["goodsList","searchList"]),
    // ...mapGetters(["searchList"]),
    ...mapState({
      total: (state) => {
        return state.search.searchList.total;
      },
      pageNo: (state) => {
        return state.search.searchList.pageNo;
      },
      pageSize: (state) => {
        return state.search.searchList.pageSize;
      },
      totalPages: (state) => {
        return state.search.searchList.totalPages;
      },
    }),
  },
  methods: {
    getData() {
      this.$store.dispatch("searchList", this.searchParams);
    },
    removeCategoryName() {
      this.searchParams.categoryName = undefined;
      this.searchParams.category1id = undefined;
      this.searchParams.category2id = undefined;
      this.searchParams.category3id = undefined;
      this.getData();
      this.$router.push({ name: "search", params: this.$route.params });
    },
    removeKeyword() {
      this.searchParams.keyword = undefined;
      this.getData();
      this.$bus.$emit("empty");
      this.$router.push({ name: "search", query: this.$route.query });
    },
    removeTrademark(e) {
      this.searchParams.trademark = undefined;
      this.getData();
      console.log(e);
      // this.$router.push({ name: "search", params:e.trademark });
    },
    removeAttrValue(index) {
      console.log(index);
      this.searchParams.props.splice(index, 1);
      this.getData();
    },
    receiveData(trademarkData) {
      this.searchParams.trademark =
        trademarkData.tmId + ":" + trademarkData.tmName;
      this.getData();
    },
    attrValue(attr, attrValue) {
      let props = `${attr.attrId}:${attrValue}:${attr.attrName}`;
      if (!this.searchParams.props.includes(props)) {
        this.searchParams.props.push(props);
      }
      this.getData();
    },
    navbar(flag) {
      let num = this.searchParams.order.split(":")[0];
      let num1 = this.searchParams.order.split(":")[1];
      console.log(num, num1);
      let newOrder = "";
      if (flag == num) {
        newOrder = `${num}:${num1 == "desc" ? "asc" : "desc"}`;
      } else {
        newOrder = `${flag}:${"desc"}`;
      }
      this.searchParams.order = newOrder;
      this.getData();
    },
    handlePageChange(newPage) {
      this.searchParams.pageNo = newPage; // 更新当前页码
      // this.$store.dispatch("searchList", { ...this.searchParams });
      this.getData();
    },
  },
  watch: {
    $route(newValue, oldValue) {
      Object.assign(this.searchParams, this.$route.query, this.$route.params);
      this.getData();
      this.searchParams.category1id = "";
      this.searchParams.category2id = "";
      this.searchParams.category3id = "";
      console.log(this.$route);
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
          }
        }
      }
    }
  }
}
</style>
