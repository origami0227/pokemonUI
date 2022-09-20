<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'pokemonCollapse'
}
</script>
<style lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
  &:hover{
    cursor: pointer;
  }
}
</style>