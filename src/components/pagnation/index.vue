<template>
  <div class="pagination">
    <!-- 上面部分 -->
    <button>上一页</button>
    <button>1</button>
    <button>···</button>
    <!-- 中间部分 -->
    <button></button>
    <!-- 下面部分 -->
    <button>···</button>
    <button>5</button>
    <button>下一页</button>
    <button>{{ totaPage }}</button>
    <button style="margin-left: 30px">共 {{ total }} 条</button>

    <el-pagination
      background
      layout="prev, pager, next,total"
      :current-page="pageNo"
      :page-size="pageSize"
      :total="total"
      @current-change="handlePageChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "totalPages"],
  computed: {
    totaPage() {
      return Math.ceil(this.total / this.pageSize);
    },

  },
  methods:{
    handlePageChange(newPage) {
      this.$emit("pageChange", newPage);
    },
  },
  mounted(){
  }
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
.active {
  background-color: skyblue;
}

</style>
