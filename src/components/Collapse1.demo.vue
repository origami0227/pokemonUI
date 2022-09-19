<demo>
常规用法
</demo>
<template>
<Collapse>
  <CollapseItems title="标题1">内容1</CollapseItems>
  <CollapseItems title="标题2">内容2</CollapseItems>
  <CollapseItems title="标题3">内容3</CollapseItems>
</Collapse>
</template>

<script lang="ts">
import Collapse from '../lib/Collapse.vue'
import CollapseItems from '../lib/CollapseItems.vue'
export default {
  components:{Collapse,CollapseItems}
}
</script>