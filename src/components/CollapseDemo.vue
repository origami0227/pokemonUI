<template>
  <h1>Collapse 示例</h1>
  <Demo :component="CollapseDemo1" />

</template>
<script lang="ts">
import Demo from "./Demo.vue";
import CollapseDemo1 from './Collapse1.demo.vue'
export default {
  components: {Demo},
  setup() {
    return {CollapseDemo1}
  }
}
</script>
<style lang="scss">

</style>