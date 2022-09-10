<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
  </div>
</template>

<script lang="ts">
import Switch1Demo from '../components/Switch1.demo.vue'
import Switch2Demo from '../components/Switch2.demo.vue'
import Demo from '../components/Demo.vue'


export default {
  components: {
    Demo
  },
  setup() {
    return {
       Switch2Demo, Switch1Demo,
    }
  }
}
</script>

