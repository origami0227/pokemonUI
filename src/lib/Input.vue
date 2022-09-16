<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
    <div class="box" v-if="error">
      <svg>
        <use xlink:href="#icon-jinggao"></use>
      </svg>
      <span>{{ error }}</span>
    </div>

  </div>
</template>
<script>
export default {
  name: 'pokemonInput',
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  }
}
</script>
<style lang="scss" scoped>
$h: 32px;
$border-color: #999;
$border-color-hover: #666;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #F1453D;
.box {
  display: inline-flex;
  color: $red;
  align-items: center;

  > * {
    margin-right: 2px;
  }

  > svg {
    width: 13px;
    height: 13px;
  }
}

.wrapper {
  font-size: 12px;
  display: inline-flex;
  align-items: center;

  > * {
    margin-right: 4px;
  }

  > input {
    height: $h;
    border: 1px solid $border-color;
    border-radius: 5px;
    padding: 0 8px;
    font-size: inherit;

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }

    &[disabled], &[readonly] {
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;
    }
  }

  &.error {
    > input {
      border-color: $red;
    }
  }
}
</style>