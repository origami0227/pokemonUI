<template>
  <div class="col" :class="[`col-${span}`,offset && `offset-${offset}`]"
       :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'pokemonGridCol',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
  },
  data() {
    return {
      gutter: 0
    }
  },
  created() {
    console.log('col created')
  },
  mounted() {
    console.log('col mounted')
  },

}
</script>
<style lang="scss" scoped>
.col {
  display: flex;
  height: 100px;
  border: 1px solid #ddd;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%;
    }
  }
}
</style>