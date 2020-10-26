<!--
 * @Author: lpj
 * @Date: 2020-10-23 15:19:04
 * @LastEditTime: 2020-10-26 10:49:25
 * @LastEditors: Please set LastEditors
 * @Description: 动态渲染组件 仿  iView Run 它是能够在线编写一个标准的 .vue 文件，并及时渲染的，它也预置了 iView 环境，你可以使用 iView 组件库全部的组件
 * @FilePath: \compoent\src\components\display\display.vue
-->
<template>
  <div ref="display" id="display"></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Ref, Watch } from "vue-property-decorator";
import randomStr from "@/util/random_str";
@Component
export default class Display extends Vue {
  @Prop({
    type: String,
    default: ""
  })
  // 外部传进来的代码
  code!: string;

  html = "";
  js = "";
  css = "";
  // 要挂载的组件
  component: any = null;
  // css id
  id = randomStr();
  // 父节点
  @Ref("display") display: any;

  mounted() {
    this.renderCode();
  }

  // 当 Display 组件销毁时，也要手动销毁 extend 创建的实例以及上面的 css：
  beforeDestroy() {
    this.destroyCode();
  }

  // 当 this.code 更新时，整个过程要重新来一次
  @Watch("code", { immediate: true, deep: true })
  codeChange() {
    this.destroyCode();
    this.renderCode();
  }
  getSource(source: string, type: string) {
    // 正则分析
    // []表示或里面的值 在[]外面^是头部 在[]表示取反 这边的意思是只要不是>的都行
    // 结果 匹配到例如<template>
    const regex = new RegExp(`<${type}[^>]*>`);
    // 切割对应的script style  template
    let openingTag: RegExpMatchArray | null | string = source.match(regex);
    if (!openingTag) return "";
    else openingTag = openingTag[0];
    // 获取整个字符串
    return source.slice(
      source.indexOf(openingTag) + openingTag.length,
      source.lastIndexOf(`</${type}>`)
    );
  }

  splitCode() {
    // 为了容错，有时使用者传递的 code 可能会忘记在外层包一个节点，没有根节点的组件，是会报错的
    this.html =
      '<div id="app">' + this.getSource(this.code, "template") + "</div>";
    // .vue 的 <script> 部分一般都是以 export default 开始的
    this.js = this.getSource(this.code, "script").replace(
      /export default/,
      "return"
    );
    this.css = this.getSource(this.code, "style");
  }
  // 当 Display 组件销毁时，也要手动销毁 extend 创建的实例以及上面的 css：
  destroyCode() {
    const $target = document.getElementById(this.id);
    if ($target) $target.parentNode?.removeChild($target);

    if (this.component) {
      this.display?.removeChild(this.component.$el);
      this.component.$destroy();
      this.component = null;
    }
  }

  renderCode() {
    this.splitCode();
    if (!this.display) {
      return;
    }
    if (this.html !== "" && this.js !== "") {
      // 把字符串变成一个对象
      const parseStrToFunc = new Function(this.js)();
      parseStrToFunc.template = this.html;
      const Component = Vue.extend(parseStrToFunc);
      this.component = new Component().$mount();

      this.display?.appendChild(this.component.$el);
      // console.log(parseStrToFunc);
      console.log(this.display, this.component);
      // 处理css
      if (this.css !== "") {
        const style = document.createElement("style");
        style.type = "text/css";
        style.id = this.id;
        style.innerHTML = this.css;
        document.getElementsByTagName("head")[0].appendChild(style);
      }
    }
  }
}
</script>
