<template>
  <el-container>
    <el-aside class="aside-menu" width="auto">
      <aside-menu :isCollapse="isCollapse"></aside-menu>
    </el-aside>
    <el-container>
      <el-header>
        <common-header v-model="isCollapse"></common-header>
      </el-header>
      <el-divider></el-divider>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideMenu from "./components/aside_menu";
import CommonHeader from "./components/header";
export default {
  name: "layout",
  components: {
    AsideMenu,
    CommonHeader
  },
  data() {
    return {
      isCollapse: false
    };
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #e9eef3;
  color: #333;
  text-align: left;
}

.el-main {
  color: #333;
  text-align: center;
}
.el-container {
  height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-container.is-vertical {
  flex-direction: column;
  height: 100%;
}
.el-divider--horizontal {
  margin: 0;
}
</style>
