<template>
  <button class="pokemon-switch" @click="toggle" :class="{'pokemon-checked':value}">
    <!--    给button设置一个类，当这个类为ture时变化-->
    <span></span>
  </button>
</template>
<script lang="ts">
import {ref} from 'vue'

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
      //input 与SwitchDemo组件的input事件对应，！props.value与$event对应
    }
    return {toggle}
  },
}

</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
.pokemon-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: #bfbfbf;
  border-radius: calc($h2 / 2);
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc($h2 / 2);
    transition: all 250ms;
  }

  &.pokemon-checked {
    background: #1890ff;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &.pokemon-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
}
</style>

