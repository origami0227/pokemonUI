<demo>
常规用法
</demo>
<template>
  <div style="overflow: hidden;border: 1px solid green; padding: 5px" @click="yyy">
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
  </div>

</template>
<script>
import Popover from '../lib/Popover.vue'
import Button from '../lib/Button.vue'
export default {
  components: {Popover,Button},
  methods:{
    yyy(){
      console.log('yyy')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>