<template>
  <button class="pokemon-button"
  :class="`theme-${theme}`"
  >
    <slot/>
  </button>
</template>
<script lang="ts">
export default {
props:{
  theme: {
    type:String,
    default: 'button'
  }
}
}
</script>