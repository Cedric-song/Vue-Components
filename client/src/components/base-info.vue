<template lang="html">
  <div class="item">
    <div class="line-top">
      <span class="locationid" v-if="info.locationid">
          {{info.locationid}}
      </span>
      <span class="title">{{ info.title }}</span>
      <span class="reserve right" v-if="info.reserve==='取消预定'" @click="cancel">{{ info.reserve }}</span>
      <span class="reserve" v-else>{{ info.reserve }}</span>
      <span class="distance" v-if="info.distance">[{{ info.distance }}]</span>
    </div>
    <div class="bank" v-if="info.bank">
      <span>所属银行：{{info.bank }}</span>
    </div>

    <base-address :address="info.address"></base-address>
  </div>
</template>

<script>
import BaseAddress from './base-address.vue'
import rootUrl from '../api/index'
export default {
  name: 'base-info',
  components: {
    BaseAddress
  },
  props: {
    info: {
      type: Object,
      default: {}
    }
  },
  methods: {
    cancel() {
      const self = this
      this.axios.post(rootUrl.cancelReserve, {
        order_number: self.info.id
      }).then((response) => {
        this.$emit('cancel')
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>
.item {
  padding-top: 2.2rem;
  color: #999;
  background-color: #fff;
}

.line-top {
  position: relative;
}

.title {
  font-size: 3.2rem;
  padding-left: 2rem;
  color: #000;
}

.distance {
  font-size: 2rem;
  position: absolute;
  right: 2rem;
  bottom: .5rem;
  letter-spacing: 1px;
}

.reserve {
  font-size: 2rem;
  background-color: #fab74c;
  color: #fff;
  padding: .2em 1em;
  border-radius: 4px;
  position: relative;
  left: 2rem;
  bottom: .5rem;
}

.reserve.right {
  float: right;
  left: -2rem;
  bottom: 0rem;
}


/* bank */

.bank {
  margin-top: 1rem;
  padding-left: 2rem;
  font-size: 2.4rem;
  position: relative;
}


/* bank */

.locationid {
  background-image: url(../assets/images/pin.png);
  background-size: contain;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 2.6rem;
  width: 4rem;
  height: 5.3rem;
  line-height: 5rem;
  position: relative;
  left: 2rem;
  top: -1rem;
  display: inline-block;
  text-align: center;
}
</style>
