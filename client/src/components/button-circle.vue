<template lang="html">
  <div class="button-circle">
    <div class="btn" v-if="hadReserve">
      <p>取消</p>
      <p>预定</p>
    </div>

    <div class="btn btn-single" v-else>
      <p>预定</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'button-circle',
  props: {
    reserve: {
      type: Number,
      default: 1 // 1 represent unreserve ; 2 represent show reserve ; 3 represent had reserved
    }
  },
  computed: {
    hadReserve() {
      if (this.$props.reserve % 3 === 0) {
        return !0
      }
      return 0
    }
  }
}
</script>

<style scoped>
.btn {
  width: 10rem;
  height: 10rem;
  background-color: #f1bc05;
  border: 2rem solid #fce59e;
  border-radius: 50%;
  text-align: center;
  font-size: 3rem;
  color: rgb(255, 255, 255);
  line-height: 5rem;
}

.btn.btn-single {
  line-height: 10rem;
}
</style>
