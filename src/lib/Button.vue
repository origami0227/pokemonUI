<template>
  <div :size="size">
    <button v-bind="rest">
      <slot/>
    </button>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
  setup(props, context) {
    const {size, ...rest} = context.attrs//出了size其他的放在rest里面
    return{size,rest}
  }
}
</script>