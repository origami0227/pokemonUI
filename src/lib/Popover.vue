<template>
  <div class="popover" @click="show">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot/>
  </div>
</template>
<script>
import {nextTick} from "vue";

export default {
  name: 'pokemonPopover',

  data() {
    return {visible: false}
  },
  methods: {
    async show() {
      this.visible = !this.visible
      console.log(1)
      await nextTick()
      if(this.visible ===true){
        document.addEventListener('click',()=>{
          this.visible = false
          console.log(2)
        })
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