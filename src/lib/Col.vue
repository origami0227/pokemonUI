<template>
  <div class="col" :class="[`col-${span}`]">
    <slot/>
  </div>
</template>
<script>
export default {
  name:'pokemonGridCol',
  props:{
    span:{
      type:[Number,String]
    }
  }
}
</script>
<style lang="scss" scoped>
.col {
  display: flex;
  height: 100px;
  background-color: grey;
  width: 50%;
  border: 1px solid red;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%;
    }
  }
}
</style>