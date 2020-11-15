<template>
  <div class="header">
    <div class="collapse">
      <i class="el-icon-s-fold" @click="toCollapse()">
        让努力成为一种习惯 所求皆如意 所盼皆可期</i
      >
    </div>

    <div class="user-center">
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  data() {
    return {};
  },
  methods: {
    toCollapse() {
      this.$emit("input", !this.value);
      console.log("toCollapse");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
