<template>
  <a-row id="globalHeader" style="margin-bottom: 16px" align="center">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKey"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/egg.png" />
            <div class="title">纳尔 OJ</div>
          </div>
        </a-menu-item>

        <a-menu-item :key="item.path" v-for="item in routes">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? "未登录" }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "../router/routes";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

const router = useRouter();
const selectedKey = ref(["/"]);

//跳转之后 将选中的key设置为当前路径
router.afterEach((to, from, failure) => {
  selectedKey.value = [to.path];
});

//先路径跳转
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};

const store = useStore();

setTimeout(() => {
  store.dispatch("user/getLoginUser", {});
}, 3000);
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}
.logo {
  height: 40px;
}
.GlobalHeader {
  box-sizing: border-box;
  width: 100%;
  padding: 50px;
  background-color: var(--color-neutral-2);
}
.title {
  color: #444;
  margin-left: 16px;
}
</style>
