<template>
  <a-row id="globalHeader" align="center" :wrap="false">
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

        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
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
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import ACCESS_ENUM from "@/access/accessEnum";

const store = useStore();
const router = useRouter();
const selectedKey = ref(["/"]);

const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      //需要隐藏 返回false
      return false;
    }
    //todo 根据权限过滤菜单
    if (!checkAccess(store.state.user.loginUser, item.meta?.access as string)) {
      return false;
    }
    return true;
  });
});

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

setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "纳尔管理员",
    userRole: ACCESS_ENUM.ADMIN,
  });
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
