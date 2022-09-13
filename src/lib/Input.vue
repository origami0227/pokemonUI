<template>
<div class="wrapper">
  <input :value="value" type="text" :disabled="disabled">
</div>
</template>
<script>
export default {
  name:'pokemonInput',
  props:{
    value:{
      type:String,
    },
    disabled:{
      type:Boolean,
      default:false,
    }
  }
}
</script>
<style lang="scss" scoped>
$h:32px;
$border-color:#999;
$border-color-hover:#666;
$box-shadow-color:rgba(0,0,0,0.5);
.wrapper{
  font-size: 12px;
  display: inline-block;
  >input{
    height: $h;
    border: 1px solid $border-color;
    border-radius: 5px;
    padding: 0 8px;
    font-size: inherit;
    &:hover{
      border-color: $border-color-hover;
    }
    &:focus{
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled]{
      border-color: #ccc;
      color:#ccc;
    }
  }
}
</style>