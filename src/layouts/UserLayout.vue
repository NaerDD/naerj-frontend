<template>
  <div id="UserLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/egg.png" class="logo" />
          <div>纳尔 OJ</div>
        </a-space>
      </a-layout-header>

      <a-layout-content class="content">
        <router-view />
      </a-layout-content>

      <a-layout-footer class="footer">
        <a href="https://github.com/NaerDD" target="_blank"> 编程导航 </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#UserLayout {
  text-align: center;
}

#UserLayout .logo {
  width: 64px;
  height: 64px;
}

#UserLayout .header {
  margin-top: 16px;
  margin-bottom: 16px;
}
#UserLayout .content {
  /* background: linear-gradient(to right, #aaa, #fff); */
  background-image: url("https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png");
  margin-bottom: 16px;
  padding: 20px;
}
#UserLayout.footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
