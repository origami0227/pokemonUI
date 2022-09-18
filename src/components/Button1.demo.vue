<demo>
常规使用(三种主题)
</demo>
<template>
  <div>
    <Button>你好</Button>
    <Button style="background: #e89ec5">你好</Button>
    <Button style="background: #cbe89e">你好</Button>
    <Button theme="link" >你好</Button>
    <Button theme="link" style="background: #e8d59e">你好</Button>
    <Button theme="text">你好</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>
