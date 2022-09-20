<template>
  <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'pokemonGridRow',
  props: {
    gutter: {
      type: [Number, String]
    }
  },
}
</script>
<style lang="scss" scoped>
.row {
  display: flex;

}
</style>