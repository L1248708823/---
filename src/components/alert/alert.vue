<!--
 * @Author: lpj
 * @Date: 2020-10-23 14:51:19
 * @LastEditTime: 2020-10-27 11:25:39
 * @LastEditors: Please set LastEditors
 * @Description: 弹出提示组件
 * @FilePath: \compoent\src\components\alert\alert.vue
-->
<template>
  <div class="alert">
    <transition-group name="list" tag="p">
      <div class="alert-main" v-for="item in notices" :key="item.name">
        <div class="alert-content" :class="item.type || 'info'">
          {{ item.content }}
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NoticeType } from "../type";
@Component
export default class Alert extends Vue {
  notices: Array<NoticeType> = [];
  //
  seed = -1;
  alertClass = "info";
  // 给每个消息设置name值,方便删除
  getUuid() {
    this.seed++;
    return "alert_" + this.seed;
  }

  add(notice: NoticeType) {
    const name = this.getUuid();
    const _notice = Object.assign(
      {
        name: name
      },
      notice
    );

    this.notices.push(_notice);
    setTimeout(() => {
      this.remove(name);
    }, notice.duration);
  }

  remove(name: string) {
    const length = this.notices.length;
    for (let i = 0; i < length; i++) {
      if (this.notices[i].name === name) {
        this.notices.splice(i, 1);
        break;
      }
    }
  }
}
</script>

<style scoped>
.alert {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  pointer-events: none;
}
.alert-content {
  display: inline-block;
  padding: 8px 16px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
}
.info {
}
.warning {
  background-color: rgba(253, 246, 236);
  color: rgba(230, 162, 60);
}
.errors {
  background-color: rgba(254, 240, 240);
  color: rgba(245, 108, 108);
}
.success {
  background-color: rgba(240, 249, 235);
  color: rgba(103, 194, 198);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.6s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
