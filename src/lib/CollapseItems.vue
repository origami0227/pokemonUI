<template>
  <div class="collapseItem" @click="open=!open">
    <div class="title">
      {{ title }}
    </div>
    <transition name="slide-fade">
    <div class="content" v-show="open">
      <slot></slot>
    </div>
    </transition>
  </div>
</template>
<script lang="ts">
export default {
  name: 'pokemonCollapseItems',
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      open: false
    }
  }
}
</script>
<style lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapseItem {
  > .title {
    border: 1px solid $grey;
    border-radius: $border-radius;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }

  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }

  &:last-child {
    margin-bottom: -1px;
    > .title {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }

  > .content {
    padding: 8px;
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
}
</style>