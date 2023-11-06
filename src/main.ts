import { createApp } from "vue";
import App from "./App.vue";
// 引入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 獲取實例應用物件
const app = createApp(App);
// 使用element-plus插件
app.use(ElementPlus);
app.mount("#app");
