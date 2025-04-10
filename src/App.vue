<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style>
#app {
}
</style>

<script setup lang="ts">
import { useStore } from "vuex";
import BasicLayout from "./layouts/BasicLayout.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

router.beforeEach((to, from, next) => {
  //管理员可见
  if (to.meta?.access === "canAdmin") {
    if (store.state.user.loginUser?.role !== "admin") {
      next("/NoAuth");
      return;
    }
  }
  next();
  console.log(to);
});
</script>
