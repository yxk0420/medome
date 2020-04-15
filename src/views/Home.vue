<template>
  <div class="home" style="height: 100%;">
    <el-container>
      <el-aside width="200px">
        <!-- 用户信息 -->
        <div style="height:15%;" background-color="red"></div>
        <el-menu @select="handleSelect" >
          <el-menu-item index="1" class="nav-menu-item">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- <el-submenu index="1">
            <template slot="title"> <i class="el-icon-menu"></i> 首页</template>
          </el-submenu>-->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>功能菜单
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" to="../views/About.vue"
                >功能菜单1</el-menu-item
              >
              <el-menu-item index="1-2">功能菜单2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {

   
  },
   methods: {
      handleSelect() {
        console.log("111");
      }
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
  background-color: #d3dce6;
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
