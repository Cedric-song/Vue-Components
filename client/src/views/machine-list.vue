<template lang="html">
  <!-- container -->
  <div class="container">
    <!-- single item in list -->
    <div class="list-item" v-for="item in items" @click="goto(`/machine/${item.machine_id}`)">
      <!-- base info -->
      <base-info :info="item.info"></base-info>
      <!-- circle and font tag -->
      <div class="line-bottom">
        <div class="b-left">
          <virtual-circle class="vc" circleColor="#fdaaaa" :circlePercent="item.circlePercent[0].percent" circleAmount="1元" :circleStatus="item.circlePercent[0].status"></virtual-circle>
          <virtual-circle class="vc" circleColor="#b6e8ec" :circlePercent="item.circlePercent[1].percent" circleAmount="5角" :circleStatus="item.circlePercent[1].status"></virtual-circle>
          <virtual-circle class="vc" circleColor="#f6e181" :circlePercent="item.circlePercent[2].percent" circleAmount="1角" :circleStatus="item.circlePercent[2].status"></virtual-circle>
        </div>
        <div class="b-right">
          <div class="tags">
            <tag-font class="tag" :text="tag" v-for="tag,index in item.tags" :key="index"></tag-font>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import rootUrl from '../api/index'
import VirtualCircle from '../components/virtual-circle.vue'
import TagFont from '../components/tag-font.vue'
import BaseInfo from '../components/base-info.vue'
export default {
  name: 'machine-list',
  components: {
    VirtualCircle,
    TagFont,
    BaseInfo
  },
  data() {
    return {
      items: []
    }
  },
  beforeMount() {
    this.axios.post(rootUrl.fetchListData, {
      params: {
        queryname: '大连'
      }
    }).then((response) => {
      let arr = []
      response.data.result.map((item) => {
        arr.push({
          machine_id: item.id,
          circlePercent: item.cash_status,
          info: {
            title: item.title,
            reserve: item.reservable ? '预定' : '',
            distance: item.distance,
            address: item.address
          },
          tags: item.cash_describe
        })
      })
      this.items = arr
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    goto(path) {
      this.$router.push(path)
      console.log(`goto: ${path}`)
    }
  }
}
</script>

<style scoped>
.list-item {
  color: #999;
  background-color: #fff;
  margin-bottom: 2rem;
}


/* line-bottom */

.line-bottom {
  padding: 2rem 0;
  display: flex;
}

.b-left {
  padding: 0 0 0 2rem;
  flex: 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.vc {
  margin-right: 1rem;
}

.b-right {
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.tag {
  margin-bottom: 1rem;
  margin-right: 1rem;
}
</style>
