<template lang="html">

    <div class="tag-item">
      {{ text }}
    </div>

</template>

<script>
export default {
  name: 'tag-font',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.tag-item {
  display: inline-block;
  padding: 0 1rem;
  border-radius: 4px;
  font-size: 2rem;
  color: #999;
  border: 1px solid #999;
}
</style>
