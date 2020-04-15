<template>
  <div class="top_login">
    <div class="top_back">
      <div class="box">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <div class="dl">登录</div>

          <el-form-item label="用户" prop="name1">
            <el-input v-model="ruleForm.name1"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即登录</el-button
            >
            <el-button @click="resetForm('ruleForm')">忘记密码</el-button>
          </el-form-item>
          <el-form-item class="Sponsor">
            <span class="sponsor-z">{{ Sponsor }}</span>
            <el-link type="primary">{{ Sponsor }}</el-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        name1: "",
        pass: "",
        checkPass: ""
      },
      Sponsor: "赞助说着玩的别当真",

      rules: {
        name1: [
          { required: true, message: "请输入用户姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.logining = true;
          localStorage.setItem("name", this.ruleForm.name1);
          this.$router.push({ path: "/" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.dl {
  text-align: center;
  padding-bottom: 20px;
  font-size: 30px;
}
.top_login {
  width: 100%;
  height: 100%;
  background-image: url(../assets/158683009371.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
}
.top_back {
  border-radius: 10px;
  height: 300px;
  width: 500px;
  margin: 0 auto;
  position: relative;
  margin-top: -150px;
  top: 50%;
  padding-top: 20px;
  background: white;
  box-sizing: border-box;
}
.box {
  padding: 0 80px 0 60px;
}
.Sponsor-z {
}
</style>
