<template>
  <div>
    <h1>aaa</h1>
    <el-button type="primary" size="default" :icon="Search"> aaa </el-button>
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
div {
  h1 {
    color: $color;
  }
}
</style>
