import { createApp } from "vue";
import App from "@/App.vue";
// 引入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//引入模板的全局的样式
import "@/styles/index.scss";
// 國際化語言
// @ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhTw from "element-plus/dist/locale/zh-tw.mjs";

// 獲取實例應用物件
const app = createApp(App);

// 使用element-plus插件
app.use(ElementPlus, {
  locale: zhTw,
});

console.log(import.meta.env);

app.mount("#app");
