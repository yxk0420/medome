<template>
  <div class="home" style="height: 100%;">
    <el-container>
      <el-aside width="200px">
        <!-- 用户信息 -->
        <div style="height:15%;" background-color="red"></div>
        <el-menu :router="true">
          <el-menu-item index="/index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>功能菜单
            </template>
            <!-- <router-link :to="{path: 'page1'}">功能菜单1</router-link> -->
            <el-menu-item index="/page1">功能菜单1</el-menu-item>
            <el-menu-item index="/page2">功能菜单2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-page-header @back="goBack" content="详情页面"></el-page-header>
          <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">    菜单功能  </el-breadcrumb-item>
            <el-breadcrumb-item  :to="{ path: 'page1' }">活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>-->
        </el-header>
        <!--  -->
        <el-main>
          <router-view></router-view>
        </el-main>
        <!--  -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      activeindex: "this.$router.path"
    };
  },
  methods: {
    handleSelect() {
      console.log("111");
    },
    goBack() {}
  }
};
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-container {
  height: 100%;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
