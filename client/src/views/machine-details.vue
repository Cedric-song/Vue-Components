<template lang="html">
  <!-- container -->
  <div class="container">
    <!-- item -->
    <div class="item">
      <!-- base info -->
      <base-info :info="info"></base-info>
      <div class="line-bottom">
        <div class="b-left">
          <virtual-circle circleColor="#fdaaaa" :circlePercent="percent[0]" circleAmount="1元" circleStatus="充足"></virtual-circle>
          <virtual-circle circleColor="#b6e8ec" :circlePercent="percent[1]" circleAmount="5角" circleStatus="少量"></virtual-circle>
          <virtual-circle circleColor="#f6e181" :circlePercent="percent[2]" circleAmount="1角" circleStatus="缺少"></virtual-circle>
        </div>
      </div>
    </div>
    <!-- item -->
    <div class="item item-intro" id='test1'>
      <img :src="imageUrl" alt="设备图">
      <div class="intro">
        <div class="title">
          {{ deviceTitle }}
        </div>
        <div class="tags">
          <tag-font v-for="tag,index in tags" class="tag" :text="tag" :key="index"></tag-font>
        </div>
      </div>
    </div>

    <div class="item item-reserve">
      <div class="reserve">
        <button-circle @click.native="showInputs" :reserve="reserve"></button-circle>
        <div class="text">
          <p>可对硬币兑换机进行硬币预约，</p>
          <p>当硬币兑换机有您需要的钱数时，</p>
          <p>系统会自动给您推送消息。</p>
        </div>
      </div>

      <div class="inputs" v-if="reserveStatus2">
        <base-inputs amount="1元" :readonly="readonly" ref="input1"></base-inputs>
        <base-inputs amount="5角" :readonly="readonly" ref="input2"></base-inputs>
        <base-inputs amount="1角" :readonly="readonly" ref="input3"></base-inputs>
      </div>

      <div class="btns" v-if="reserveStatus3">
        <button-svg name="submit" color="#ee6e6e" @click.native="submit"></button-svg>
        <button-svg name="cancel" color="#919191" @click.native="cancel"></button-svg>
      </div>
    </div>

  </div>
</template>

<script>
import VirtualCircle from '../components/virtual-circle.vue'
import ButtonCircle from '../components/button-circle.vue'
import TagFont from '../components/tag-font.vue'
import BaseInfo from '../components/base-info.vue'
import BaseInputs from '../components/base-inputs.vue'
import ButtonSvg from '../components/button-svg.vue'
import rootUrl from '../api/index'
export default {
  name: 'machine-details',
  components: {
    VirtualCircle,
    TagFont,
    BaseInfo,
    ButtonCircle,
    BaseInputs,
    ButtonSvg
  },
  data() {
    return {
      deviceTitle: '',
      imageUrl: '',
      info: {},
      percent: [],
      tags: [],
      hadReserve: false,
      reserve: 1,
      cash_amount: [0, 0, 0]
    }
  },
  methods: {
    showInputs() {
      if (this.reserve === 3) {
        const self = this
        this.reserve = 1
        this.axios.post(rootUrl.cancelReserve, {
          order_number: self.info.id
        }).then((response) => {
          if (response.data.result.order_status === 'cancel') {
            alert('取消成功！')
          }
        })
      } else {
        this.reserve = 2
      }
    },
    submit() {
      this.reserve = 3
      console.log('submit')
      const self = this
      this.axios.post(rootUrl.reserve, {
        id: self.$route.path,
        cash_amount: [~~self.$refs.input1.value, ~~self.$refs.input2.value, ~~self.$refs.input3.value]
      }).then((response) => {
        this.info.id = response.data.result.order_number
        alert('预约成功！')
      })
    },
    cancel() {
      this.reserve = 1
      console.log('cancel')
    }
  },
  computed: {
    reserveStatus2() {
      if (this.reserve !== 1) {
        return !0
      }
    },
    reserveStatus3() {
      if (this.reserve === 2) {
        return !0
      }
    },
    readonly() {
      if (this.reserve === 3) {
        return true
      }
    }
  },
  beforeMount() {
    this.axios.get(rootUrl.getExchangeSearchDetail.concat(`?id=${this.$route.params.id}`)).then((response) => {
      this.deviceTitle = response.data.deviceTitle
      this.imageUrl = response.data.imageUrl
      this.info = response.data.info
      this.percent = response.data.percent
      this.tags = response.data.tags
      this.info.id = this.$route.params.id
    })
  }
}
</script>

<style scoped>
.item {
  color: #999;
  background-color: #fff;
  margin-bottom: 2rem;
}

.b-left {
  padding: 1rem 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}


/* item-intro */

.item-intro {
  padding: 2rem 8rem;
  display: flex;
}

.item-intro img {
  width: 15rem;
  height: 25rem;
  margin-right: 2rem;
}

.intro {
  flex: 2;
  padding-left: 4rem;
}

.tags {
  padding-top: 1rem;
  display: flex;
  height: 20rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.tags .tag {
  font-size: 2.4rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

.title {
  font-size: 2.8rem;
  color: rgb(1, 1, 1);
  height: 20%;
}


/* item-reserve */

.reserve {
  display: flex;
  margin: 0 12rem;
  padding: 2rem 0;
}

.reserve .text {
  font-size: 2rem;
  color: rgb(153, 153, 153);
  padding-left: 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.inputs {
  height: 15rem;
  border-top: 1px solid #d7d7d7;
  font-size: 2.8rem;
  color: rgb(102, 102, 102);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 0 8rem;
}


/* btns*/

.btns {
  margin: 0 auto;
  width: 22rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
}
</style>
