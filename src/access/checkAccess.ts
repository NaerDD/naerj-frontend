import ACCESS_ENUM from "./accessEnum";

/**
 * 检查权限 （判断当前登录用户是否具有某个权限）
 * @param loginUser 当前登录用户
 * @param needAccess 需要有的权限
 * @return boolean 有无权限
 */
const checkAccess = (loginUser: any, needAccess: any) => {
  //获取当前用户有的权限 （如果没有loginUser,则表示未登录）
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    //不登录都可以
    return true;
  }
  if (needAccess === ACCESS_ENUM.USER) {
    //只要登录就可以了
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }

  if (needAccess === ACCESS_ENUM.ADMIN) {
    if (loginUserAccess != ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
