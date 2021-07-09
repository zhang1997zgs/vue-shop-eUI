<template>
  <div class=''>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <slot name="center"></slot>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <slot name="right"></slot>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <slot name="end"></slot>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  data () {
    return {

    }
  }
}
</script>

<style lang='less' scoped>

</style>
