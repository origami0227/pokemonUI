<template>
  <h1>Popover示例</h1>
  <Demo2 :component="PopoverDemo1" />
  <Demo2 :component="PopoverDemo2" />

</template>
<script lang="ts">
import Demo2 from "./Demo2.vue";
import PopoverDemo1 from './Popover1.demo.vue'
import PopoverDemo2 from './Popover2.demo.vue'
export default {
  components: {Demo2},
  setup() {
    return {PopoverDemo1,PopoverDemo2}
  }
}
</script>
<style lang="scss">

</style>