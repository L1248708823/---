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
    this.$alert({
      content: "我是提示信息 1"
    });
  }
  handleOpen2() {
    this.$alert.info({
      content: "我是提示信息 2",
      duration: 3000
    });
  }
  created() {
    console.log((this as any).$message);
  }
}
</script>
