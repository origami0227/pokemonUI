<template>
  <div class="layout">
    <Topnav :toggle-menu-button-visible="true" class="nav"/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {inject, Ref} from "vue";

export default {
  components: {Topnav},
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    return {asideVisible};
  },
};
</script>
<style lang="scss" scoped>
$aside-index:10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;


  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}

aside {
  background: linear-gradient(rgba(230, 208, 44, 1) 0%, rgba(199,212,175,1)50%,rgba(48, 253, 233, 1) 100%);
  width: 150px;
  padding: 16px 0;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;

  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > ol {
    > li {
      > a {
        padding: 4px 16px;
        position: relative;
        display: block;
        text-decoration: none;

        &:hover {
          background: linear-gradient(145deg, rgba(170, 222, 100, 0.8) 0%, rgba(48, 44, 150, 0.4) 100%);;
        }
      }

      .router-link-active {
        background: linear-gradient(145deg, rgba(170, 222, 100, 0.8) 0%, rgba(48, 44, 150, 0.4) 100%);;
        //border-right: 3px solid;
        @media (min-width: 500px) {
          border-right: none;
          &::after {
            content: "";
            display: block;
            animation: x 0.5s;
            position: absolute;
            top: 0;
            right: 0;
            width: 3px;
            height: 32px;
            background: #04355b;
          }
        }
      }
    }
  }

  @keyframes x {
    0% {
      transform: rotateX(90deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
}

main {
  overflow: auto;
}
</style>