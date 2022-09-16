<demo>
常规用法
</demo>
<template>
  <Popover>
    <template v-slot:content>
      <div>popover内容</div>
    </template>
    <button>点我</button>
  </Popover>
</template>
<script>
import Popover from '../lib/Popover.vue'
export default {
  components: {Popover},
}
</script>
<style>
</style>