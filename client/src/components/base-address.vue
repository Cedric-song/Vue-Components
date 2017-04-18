<template lang="html">
  <div class="address">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-location"></use>
    </svg>
    <p>地址：{{ address }}</p>
  </div>
</template>

<script>
require('../assets/fonts/iconfont.js')
export default {
  name: 'address',
  props: {
    address: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
/* address  */

.address {
  margin-top: 1rem;
  padding-left: 2rem;
  font-size: 2.4rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #d7d7d7;
  position: relative;
}

.address p {
  padding-left: 3.5rem;
}

.icon {
  width: 4rem;
  height: 4rem;
  fill: #b6e8ec;
  overflow: hidden;
  position: absolute;
  top: -0.5rem;
  left: 1.5rem;
}


/* address  */
</style>
