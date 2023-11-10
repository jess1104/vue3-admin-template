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
// import request from "@/utils/request";
import { onMounted } from "vue";
import { reqLogin } from "./api/user";

// {
//   user_identify: isUplogin ? this.user.account : "tester02",
//   password: isUplogin ? this.user.password : "aa1111",
// }
onMounted(async () => {
  // request({
  //   url: "/login",
  //   method: "post",
  // data: {
  //   user_identify: "tester02",
  //   password: "aa1111",
  // },
  // }).then((res) => {
  //   console.log("登入res", res);
  // });

  // const resData = await request({
  //   url: "login",
  //   method: "post",
  //   data: {
  //     user_identify: "tester02",
  //     password: "aa1111",
  //   },
  // });

  // const resData = await request.post("login", {
  //   user_identify: "tester02",
  //   password: "aa1111",
  // });
  // console.log("resData", resData);

  const resData2 = await reqLogin({
    user_identify: "tester02",
    password: "aa1111",
  });

  console.log("resData2", resData2);
  const aaa: any = resData2.result.id;
  console.log("aaa", aaa);
});
</script>

<style lang="scss" scoped>
div {
  h1 {
    color: $color;
  }
}
</style>
