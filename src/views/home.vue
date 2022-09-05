<template>
  <div class="topnavAndBanner">
    <Topnav/>
    <div class="banner">
      <h1>pokemon UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/origami0227/pokemonUI">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";

export default {
  components: {Topnav},
};
</script>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 8px;
$color:#007974;
.topnavAndBanner {
  background: linear-gradient(145deg, rgba(277, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);

}

.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      border-radius: $border-radius;
      padding: 8px 24px;
      &:hover{
        text-decoration: none;
      }
    }
  }
}
</style>