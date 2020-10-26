import Alert from "@/components/alert/alert.vue";
import { Vue } from "vue-property-decorator";
import { NoticeType } from "../type";
// alert.vue 会被 Webpack 的 vue-loader 编译，把 template 编译为 Render 函数，最终就会成为一个 JS 对象，自然可以对它进行扩展。
(Alert as any).newInstance = (properties: Record<string, any>) => {
  // 可扩展接口props 目前都是空的 因为alert不复杂
  const props = properties || {};
  const Instance = new Vue({
    data: props,
    render(h) {
      return h(Alert, {
        props: props
      });
    }
  });
  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  // 这个alert是实例
  const alert = Instance.$children[0];
  // 这边闭包的作用应该是让外部可以访问到add方法 猜想
  return {
    add(noticeProps: NoticeType) {
      (alert as any).add(noticeProps);
    },
    remove(name: string) {
      (alert as any).remove(name);
    }
  };
};
export default Alert;
