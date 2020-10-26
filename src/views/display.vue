<template>
  <div>
    <h3>动态渲染 .vue 文件的组件—— Display</h3>

    <i-display :code="code"></i-display>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import iDisplay from "@/components/display/display.vue";
import defaultCode from "@/components/display/default-code";
@Component({
  components: {
    iDisplay
  }
})
export default class DisplayView extends Vue {
  code = defaultCode;
}
</script>
