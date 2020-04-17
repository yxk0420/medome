<template>
  <div class="page">
    <el-button @click="show = !show">Click Me</el-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <div>
        <transition name="el-fade-in-linear">
          <div v-show="show" class="transition-box">
            <h1>This is an about page</h1>
          </div>
        </transition>
        <transition name="el-fade-in">
          <div v-show="show" class="transition-box">.el-fade-in</div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "page1",
  data() {
    return {
      show: false
    };
  },
  methods: {}
};
</script>
<style scoped></style>
