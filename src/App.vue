<template>
  <router-view/>
</template>

<script lang="ts">

import {ref,provide} from 'vue'
export default {
  name: 'App',
  setup() {
    const asideVisible = ref(true)
    provide('asideVisible',asideVisible) //提供xxx这个名字即可使用asideVisible
  }
}
</script>
