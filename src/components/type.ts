/*
 * @Author: your name
 * @Date: 2020-10-26 14:29:55
 * @LastEditTime: 2020-10-26 14:59:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \compoent\src\components\type.ts
 */
export interface NoticeType {
  content: string;
  duration: number;
  name?: string;
  type?: "success" | "errors" | "warning" | "";
}

// export interface Options extends NoticeType {
//   type?: "success" | "errors" | "warning";
// }
