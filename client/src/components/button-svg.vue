<template lang="html">
  <div class="button-svg">
    <svg class="icon" aria-hidden="true" :style="fillColor">
      <use :xlink:href="getName" ></use>
    </svg>
  </div>
</template>

<script>
require('../assets/fonts/iconfont.js')
export default {
  name: 'button-svg',
  props: {
    name: {
      type: String,
      default: '',
      require: true
    },
    color: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    getName() {
      return '#icon-'.concat(this.$props.name)
    },
    fillColor() {
      return `fill: ${this.$props.color}`
    }
  }
}
</script>

<style scoped>
.icon {
  width: 6rem;
  height: 6rem;
}

.button-svg {
  display: inline-block;
}
</style>
