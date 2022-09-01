<template>
  <div>button实例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick"
            @focus="onFocus"
            @mouseover="onMouseOver"
    >你好
    </Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  components: {Button},
  setup() {
    const onClick = () => {
    }
    const onFocus = () => {
    }
    const onMouseOver = () => {

    }
  },

}

</script>