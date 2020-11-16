<template>
  <div class="nav-bars">
    <div class="top">
      <div :class="hbgStyle"></div>
    </div>
    <el-menu
      default-active="/"
      @open="handleOpen"
      @close="handleClose"
      background-color="#002033"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="isCollapse"
    >
      <el-menu-item index="/">
        <i class="el-icon-setting"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/cars">
        <i class="el-icon-document"></i>
        <span slot="title">车牌归属地</span>
      </el-menu-item>
      <el-menu-item index="/colleges">
        <i class="el-icon-picture-outline"></i>
        <span slot="title">院校查询</span>
      </el-menu-item>
      <el-menu-item index="/publish">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">家常美食</span>
      </el-menu-item>
      <el-menu-item index="/comment">
        <i class="el-icon-s-comment"></i>
        <span slot="title">自定义表单</span>
      </el-menu-item>
      <el-menu-item index="/fans">
        <i class="el-icon-share"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>
      <el-menu-item index="/setting">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    hbgStyle() {
      return {
        hbg: !this.isCollapse,
        hbgCollapse: this.isCollapse
      };
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-submenu .el-menu-item {
  min-width: 0;
}
.nav-bars {
  height: 100%;
  background-color: #002033;
  .el-menu {
    border-right: 0;
    height: 90%;
  }
  .top {
    display: flex;
    justify-content: center;
    background-color: #002033;
    padding: 10px;
    .hbg {
      width: 150px;
      height: 30px;
      background: url("../../../assets/nav-bar-header.png") no-repeat 50%/140px
        auto;
      background-size: contain;
    }
    .hbgCollapse {
      width: 34px;
      height: 30px;
      background: url("../../../assets/mini-nav-bar-header.png") no-repeat;
      background-size: contain;
    }
  }
}
</style>
