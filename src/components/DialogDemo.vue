<template>
  <div>dialog实例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="status" :closeOnClickOverlay="false" :ok="f1" >
   <template v-slot:content>
     <div>hi</div>
     <div>hi2</div>
   </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
import Dialog from '../lib/Dialog.vue'
import {ref} from 'vue'

export default {
  components: {Dialog, Button},
  setup() {
    const toggle = () => {
      status.value = !status.value
    }
    const status = ref(false)
    const f1 = () => {
      return false
    }
    return {status, toggle,f1}
  },
}
</script>