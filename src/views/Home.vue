<template>
  <div @click="hideUserInfo">
    <nav>
      <div class="logo">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          class="el-avatar"
        ></el-avatar>
        <h1>
          <a href="#">网易云音乐</a>
        </h1>
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/discover">发现音乐</el-menu-item>
        <el-menu-item index="/my">我的音乐</el-menu-item>
        <el-menu-item index="3">朋友</el-menu-item>
        <el-menu-item index="4">音乐人</el-menu-item>
      </el-menu>
      <div class="right">
        <el-input placeholder="请输入内容" v-model="search" class="search">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <div @click.stop="showUserInfo" class="avatarUrl">
          <el-avatar :src="avatarUrl"></el-avatar>
          <el-card class="userInfo" v-show="ok">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button
            style="float: right; padding: 3px 0"
            type="text"
            @click="logout"
              >退出登录</el-button
            >
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
        </div>
      </div>
    </nav>
    <div class="main">
      <router-view />
    </div>
    <MusicPlayer/>
  </div>
</template>

<script>
import MusicPlayer from '../components/MusicPlayer.vue'
export default {
  beforeCreate() {
    this.$store.commit("setAvatar");
    console.log(this.$store.state.profile.avatarUrl);
  },
  components:{
        MusicPlayer
      },
  data() {
    return {
      
      activeIndex: "/discover",
      input: "",
      search: "",
      avatarUrl: this.$store.state.profile.avatarUrl,
      ok: false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    showUserInfo() {
      this.ok = true;
    },
    hideUserInfo(){
        this.ok = false;
    },
    logout(){
      this.$axios.get("/logout").then(
        this.$router.push("/")
      )
    }
  },
};
</script>

<style lang="less" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 200px;
  background-color: #545c64;
}

.search {
  width: 300px;
}
.avatarUrl {
  position: relative;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  h1 {
    margin: 0;
    a {
      color: #fff;
    }
  }
}
.right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
}
.userInfo {
  position: absolute;
  width: 300px;
  right: -150px;
  top: 50px;
  z-index: 9999;
}

//个人信息样式
.text {
    font-size: 14px;
  }

.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
</style>