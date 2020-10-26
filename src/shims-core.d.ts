/*
 * @Author: your name
 * @Date: 2020-10-26 15:16:17
 * @LastEditTime: 2020-10-26 15:30:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \compoent\src\shim.core.d.ts
 */
import { Vue } from "vue-property-decorator";
// 1. 确保在声明补充的类型之前导入 'vue'
// 2. 定制一个文件，设置你想要补充的类型
//    在 types/vue.d.ts 里 Vue 有构造函数类型
declare module "vue/types/vue" {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    mpType: string;
    $alert: any;
    $message: any;
  }
}
