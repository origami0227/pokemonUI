<template>
  <div class="collapseItem">
    <div class="title">
      {{title}}
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name:'pokemonCollapseItems',
  props:{
    title:{
      type: String,
      required:true,
    }
  },
}
</script>
<style lang="scss">
.collapseItem {

}
</style>