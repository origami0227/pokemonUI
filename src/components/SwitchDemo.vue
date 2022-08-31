<template>
  <div>
    <!--    变量y储存着控制表示开关状态的value input监听当y变化时将y变成最新的值 这个值是$event-->
    <Switch :value="status" @input="status=$event" />
  </div>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'

export default {
  components: {Switch},
  setup() {
    const status = ref(false)
    return {status}
  }

}
</script>