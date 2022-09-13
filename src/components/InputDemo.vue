<template>
  <h1>Input 示例</h1>
  <Demo :component="InputDemo" />
  <Demo :component="InputDemo2" />
</template>
<script lang="ts">
import Demo from './Demo.vue'
import InputDemo from './Input.demo.vue'
import InputDemo2 from './Input.demo2.vue'

export default {
  components: {Demo},
  setup() {
    return {InputDemo,InputDemo2}
  },
}
</script>