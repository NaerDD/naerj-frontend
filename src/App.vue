<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <RouterView />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<style>
#app {
}
</style>

<script setup lang="ts">
import { useRoute } from "vue-router";
import BasicLayout from "./layouts/BasicLayout.vue";
import { onMounted } from "vue";

const route = useRoute();

/**
 * 全局初始化函数，有个别单词调用的代码，都可以写到这里
 */
const doInit = () => {
  console.log("hello 欢迎来到我的项目");
};

onMounted(() => {
  doInit();
});
</script>
