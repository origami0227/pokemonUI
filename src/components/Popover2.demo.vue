<demo>
支持hover
</demo>
<template>
  <div style="overflow: hidden;padding: 5px">
    <Popover position="top" trigger="hover">
      <template v-slot:content>
        <div>上方弹出</div>
      </template>
      <Button>上方弹出</Button>
    </Popover>
    <Popover position="bottom" trigger="hover">
      <template v-slot:content>
        <div>下方弹出</div>
      </template>
      <Button>下方弹出</Button>
    </Popover>
    <Popover position="left" trigger="hover">
      <template v-slot:content>
        <div>左方弹出</div>
      </template>
      <Button>左方弹出</Button>
    </Popover>
    <Popover position="right" trigger="hover">
      <template v-slot:content>
        <div>右方弹出</div>
      </template>
      <Button>右方弹出</Button>
    </Popover>
  </div>

</template>
<script>
import Popover from '../lib/Popover.vue'
import Button from '../lib/Button.vue'

export default {
  components: {Popover, Button},
}
</script>
<style lang="scss" scoped>
Button {
  padding: 5px;
}
</style>