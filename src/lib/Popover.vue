<template>
  <div class="popover" @click="show">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
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
      if (this.visible === true) {
        setTimeout(() => {
          let eventHandler = () => {
            this.visible = false
            console.log('document隐藏popover')
            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)
        }, 0)
      }else{
        console.log('vm隐藏popover')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;

  .content-wrapper {
    position: absolute;
    transform: translateY(-100%);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}

</style>