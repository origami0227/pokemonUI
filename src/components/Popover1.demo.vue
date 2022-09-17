<demo>
常规用法
</demo>
<template>
  <Popover>
    <template v-slot:content>
      <div>popover内容</div>
    </template>
    <Button>点我</Button>
  </Popover>
  <Popover>
    <template v-slot:content>
      <div>popover内容</div>
    </template>
    <Button>点我</Button>
  </Popover>
</template>
<script>
import Popover from '../lib/Popover.vue'
import Button from '../lib/Button.vue'
export default {
  components: {Popover,Button},
}
</script>
<style lang="scss" scoped>

</style>