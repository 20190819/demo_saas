<template>
  <div class="header">
    <div class="collapse">
      <i class="el-icon-s-fold" @click="toCollapse()">
        让努力成为一种习惯 所求皆如意 所盼皆可期</i
      >
    </div>
    <div class="userInfo">
      <div class="avatar">
        <el-avatar size="medium" :src="user.avatar" @error="errorHandler">
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </el-avatar>
      </div>
      <el-dropdown class="center" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link"
          >{{ user.name }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="setting">个人设置</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { me, logout } from "@/api/auth";
export default {
  props: {
    value: Boolean
  },
  data() {
    return {
      user: {
        name: "",
        avatar: ""
      }
    };
  },
  created() {
    this.$nextTick(() => {
      me().then(res => {
        if (res.data.code == 0) {
          let res_data = res.data.data;
          this.user.name = res_data.name;
          this.user.avatar = res_data.avatar;
        }
      });
    });
  },
  methods: {
    toCollapse() {
      this.$emit("input", !this.value);
      console.log("toCollapse");
    },
    errorHandler() {
      console.log("头像加载失败");
    },
    handleCommand(command) {
      if (command == "logout") {
        this.handleLogout();
      }
    },
    handleLogout() {
      this.$confirm("将要退出该系统, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        logout().then(res => {
          if (res.data.code == 0) {
            window.localStorage.removeItem("token");
            this.$message.success("退出成功!");
            this.$router.push("/login");
          }
        });
      });
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
.userInfo {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  .avatar {
    height: 36px;
    margin-right: 20px;
  }
  .center {
    cursor: pointer;
  }
}
</style>
