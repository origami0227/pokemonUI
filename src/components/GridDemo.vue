<template>
  <h1>Gird 示例</h1>
  <Demo :component="GridDemo1" />
  <Demo :component="GridDemo2" />

</template>
<script lang="ts">
import Demo from "./Demo.vue";
import GridDemo1 from './Grid1.demo.vue'
import GridDemo2 from './Grid2.demo.vue'

export default {
  components: {Demo},
  setup() {
    return {GridDemo1,GridDemo2}
  }
}
</script>
<style lang="scss">

</style>