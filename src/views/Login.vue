<template>
  <el-form
    :model="loginForm"
    status-icon
    :rules="rules"
    ref="loginForm"
    label-width="100px"
    class="loginForm"
  >
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="loginForm.phone"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="loginForm.password"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
      <el-button @click="resetForm('loginForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  //实例创建前获取登陆状态,跳转到首页
  beforeCreate(){
    this.$axios.get('/login/status?'+new Date()).then(res => {
      if(res.data.account != null){
        this.$router.push("/home")
      }
    });
  },
  data() {
    return {
      //表单中的手机号码和密码
      loginForm: {
        phone: "17708104290",
        password: "123456abc",
        date: new Date(),
      },
      //表单规则
      rules: {
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" },
                {
                    min:5,
                    max:12,
                    message:"长度5~12",
                    trigger:"blur"
                }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    //提交表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
            this.$axios.post('/login/cellphone', this.loginForm).then(res =>{
              console.log(res);
              localStorage.setItem("avatarUrl", JSON.stringify(res.data.profile.avatarUrl));
              this.$router.push("/home");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.loginForm {
  margin: 150px auto;
  padding: 60px 60px 30px 0;
  width: 500px;
  height: 200px;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #ccc;
}
</style>