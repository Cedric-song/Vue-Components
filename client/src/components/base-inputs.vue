<template lang="html">
  <div class="input">
    <p>{{ amount }}</p>
    <input type="text" :readonly="readonly" :class="{unactive:readonly}" v-model="value">
  </div>
</template>

<script>
export default {
  name: 'base-inputs',
  props: {
    amount: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    val: {
      type: Number
    }
  },
  data() {
    return {
      value: this.$props.val
    }
  }
}
</script>

<style scoped>
input {
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  width: 15rem;
  height: 5rem;
  background-color: #fff;
  display: inline-block;
  text-align: center;
  display: inline-block;
  font-size: 2.8rem;
}

.unactive {
  background-color: #eee;
}
</style>
