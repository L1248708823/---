<!--
 * @Author: your name
 * @Date: 2020-10-26 15:04:35
 * @LastEditTime: 2020-10-26 16:01:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \compoent\src\views\alert.vue
-->
<template>
  <div>
    <h3>挂载组件: Alert组件</h3>

    <button @click="handleOpen1">打开提示 1</button>
    <button @click="handleOpen2">打开提示 2</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class AlertView extends Vue {
  handleOpen1() {
    this.$message({
      content: "我是提示信息 1",
      type: "warning"
    });
  }
  handleOpen2() {
    this.$message.errors({
      content: "我是提示信息 2",
      duration: 3000
    });
  }
  created() {
    console.log((this as any).$message);
  }
}
</script>
