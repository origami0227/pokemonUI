<template>
  <h1>Toast示例</h1>
  <Demo :component="PopoverDemo1" />
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import PopoverDemo1 from './Popover1.demo.vue'
export default {
  components: {Demo},
  setup() {
    return {PopoverDemo1}
  }
}
</script>