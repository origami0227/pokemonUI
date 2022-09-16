<demo>
支持change
</demo>
<template>
  <Input :value="message" @input="message=$event.target.value"></Input>
  <button @click="message+=1">+1</button>
  <p>Message is: {{ message }}</p>
</template>
<script>
import Input from '../lib/Input.vue'

export default {
  components: {Input},
  data(){
    return {message:'hi'}
  },
}
</script>
<style>

</style>