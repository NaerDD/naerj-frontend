import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "./accessEnum";
import checkAccess from "./checkAccess";

router.beforeEach(async (to, from, next) => {
  console.log(store.state.user.loginUser);

  const loginUser = store.state.user.loginUser;
  //   //如果之前没有登陆过，自动登录
  if (!loginUser || !loginUser.userRole) {
    //加await 等用户登录成功之后再执行
    await store.dispatch("user/getLoginUser");
  }
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  //必须要登录
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    //没登录
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  //放行
  next();
});
