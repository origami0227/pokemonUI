<template>
  <h1>Input 示例</h1>
  <Demo :component="InputDemo" />
  <Demo :component="InputDemo2" />
  <Demo :component="InputDemo3" />
  <Demo :component="InputDemo4" />
</template>
<script lang="ts">
import Demo from './Demo.vue'
import InputDemo from './Input.demo.vue'
import InputDemo2 from './Input.demo2.vue'
import InputDemo3 from './Input.demo3.vue'
import InputDemo4 from './Input.demo4.vue'

export default {
  components: {Demo},
  setup() {
    return {InputDemo,InputDemo2,InputDemo3,InputDemo4}
  },
}
</script>