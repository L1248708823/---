/*
 * @Author: your name
 * @Date: 2020-10-26 14:38:25
 * @LastEditTime: 2020-10-26 15:09:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \compoent\src\components\alert\alert.ts
 */
import Notification from "./notification";
import { NoticeType } from "../type";
let messageInstance: any;
function getMessageInstance() {
  // 目的 防止生成多个，现在只会生成一个
  messageInstance = messageInstance || (Notification as any).newInstance();
  return messageInstance;
}
function notice({ duration = 1500, content, type }: NoticeType) {
  const instance = getMessageInstance();
  instance.add({ duration, content, type });
}
export default {
  notice,
  info(options: NoticeType) {
    options.type = "";
    return notice(options);
  },
  warning(options: NoticeType) {
    options.type = "warning";
    return notice(options);
  },
  errors(options: NoticeType) {
    options.type = "errors";
    return notice(options);
  }
};
