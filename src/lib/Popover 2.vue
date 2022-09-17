<template>
  <div class="popover" @click="show">
    <slot name="content" v-if="visible"></slot>
    <slot/>
  </div>
</template>
<script>

export default {
  name: 'pokemonPopover',
  data() {
    return {visible: false}
  },
  methods: {
    show() {
      this.visible = !this.visible
      console.log(1)
    }
  }
}
</script>
<style>
.popover {
  display: inline-block;
  vertical-align: top;
}
</style>