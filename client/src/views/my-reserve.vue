<template lang="html">
  <div class="my-reserve">
    <div class="reserve-item" v-for="item in items">
      <base-info :info="item.info" v-on:cancel="reRender"></base-info>
      <div class="inputs">
        <base-inputs amount="1元" :readonly="readonly" :val="item.cash_amount[0]"></base-inputs>
        <base-inputs amount="5角" :readonly="readonly" :val="item.cash_amount[1]"></base-inputs>
        <base-inputs amount="1角" :readonly="readonly" :val="item.cash_amount[2]"></base-inputs>
      </div>
    </div>
  </div>
</template>

<script>
import rootUrl from '../api/index'
import BaseInfo from '../components/base-info.vue'
import BaseInputs from '../components/base-inputs.vue'
export default {
  name: 'my-reserve',
  components: {
    BaseInfo,
    BaseInputs
  },
  data() {
    return {
      items: []
    }
  },
  computed: {
    readonly() {
      return !0
    }
  },
  methods: {
    reRender() {
      const self = this
      fetchList(self)
    }
  },
  beforeCreate() {
    const self = this
    fetchList(self)
  }
}

function fetchList(self) {
  self.axios.get(rootUrl.reserveList).then((response) => {
    let items = []
    response.data.result.map((item) => {
      items.push({
        order_id: item.order_id,
        info: {
          title: item.title,
          reserve: item.order_status === 'ordering' ? '取消预定' : '',
          address: item.address,
          id: item.order_id
        },
        cash_amount: item.cash_amount
      })
    })
    self.items = items
  })
}
</script>

<style scoped>
.reserve-item {
  margin-bottom: 2rem;
}

.inputs {
  height: 15rem;
  background-color: #fff;
  font-size: 2.8rem;
  color: rgb(102, 102, 102);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 0 8rem;
}
</style>
