<template>
  <div class="login">
    <el-card class="form-box" shadow="never">
      <div class="form-header"><div id="header"></div></div>
      <el-form ref="form" :model="form" :rules="rules" v-loading="loading">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名">
            <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="请输入密码">
            <i
              slot="prefix"
              class="el-input__icon el-icon-s-tools
"
            ></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="agree">
          <el-checkbox v-model="form.agree"
            >我已阅读并同意用户协议和隐私条款</el-checkbox
          >
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit-btn" @click="onSubmit"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { login } from "@/api/user";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        agree: false
      },
      loading: false,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        agree: [
          {
            validator: (rule, value, callback) => {
              console.log("validator", value);
              if (!value) {
                return callback(new Error("请遵守我们的规则"));
              } else {
                callback();
              }
            },
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.login();
        } else {
          return false;
        }
      });
    },
    login() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$message.success("登陆成功...");
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: url("../../assets/login_bg.jpg") no-repeat center;
  background-color: grey;
  background-size: cover;
}
.form-box {
  width: 400px;
}
.submit-btn {
  width: 100%;
}
.el-checkbox:last-of-type {
  margin-right: 300px;
}
.form-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
}
#header {
  width: 259px;
  height: 57px;
  background: url("../../assets/login-header.png") no-repeat center;
}
</style>
