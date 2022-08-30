<template>
  <div>
    <div class="topnav">
      <div class="logo">Logo</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
    <div class="banner">
      <h1>宝可梦UI</h1>
      <h2>一个简单好用的UI框架</h2>
      <p class="actions"></p>
      <a href="https://github.com/origami0227/pokemonUI/tree/main/src">Github</a>
      <a href="">开始</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>