<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Switch1Demo from '../components/Switch1.demo.vue'
import Switch2Demo from '../components/Switch2.demo.vue'
import Demo from '../components/Demo.vue'
import {
  ref
} from 'vue'

export default {
  components: {
    Button,
    Demo
  },
  setup() {
    const bool = ref(false)
    return {
      bool, Switch2Demo, Switch1Demo,
    }
  }
}
</script>

