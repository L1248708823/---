<template>
  <div class="home">
    <div
      v-for="title in titleList"
      :key="title"
      @click="$router.push({ name: title })"
    >
      {{ title }}
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  titleList = ["AlertView", "DisplayView"];
  // created() {
  //   const Instance = new Vue({
  //     render(h) {
  //       return h("Alter", {
  //         props: { msg: "1" }
  //       });
  //     }
  //   });
  //   const component = Instance.$mount();
  //   document.body.appendChild(component.$el);
  //   console.log("Instance", Instance);
  //   console.log("component", component);
  //   const alter = Instance.$children[0];
  //   console.log("alter", alter);
  //   // alter.$options.name = "wsalter";
  //   console.log(alter);
  // }
}
</script>
