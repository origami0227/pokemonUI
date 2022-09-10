<demo>
支持 size
</demo>
<template>
  <div>
    <div>
      <Button size="big">大号的</Button>
      <Button>标准的</Button>
      <Button size="small">小号的</Button>
    </div>
    <div>
      <Button theme="link" size="big">大号的</Button>
      <Button theme="link">标准的</Button>
      <Button size="small" theme="link">小号的</Button>
    </div>
    <div>
      <Button size="big" theme="text">大号的</Button>
      <Button theme="text">标准的</Button>
      <Button size="small" theme="text">小号的</Button>
    </div>
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