<template lang="html">
  <div class="model-list">
    <div class="model-item" v-for="item in items" :key="item.machine_id" @click="goto(`/models/${item.machine_id}`)">
      <div class="model-l">
        <p class="title">{{item.title}}</p>
        <p class="details">{{item.describe}}</p>
      </div>
      <div class="model-r">
        <img :src="item.image_url" :alt="item.title">
      </div>
    </div>

  </div>
</template>

<script>
import rootUrl from '../api/index.js'
export default {
  name: 'model-list',
  data() {
    return {
      items: []
    }
  },
  methods: {
    goto(path) {
      this.$router.push(path)
      console.log(`goto: ${path}`)
    }
  },
  beforeCreate() {
    this.axios.get(rootUrl.machineList).then((response) => {
      this.items = response.data.result
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style scoped>
.model-item {
  display: flex;
  padding: 4rem 2rem;
  background-color: #fff;
  margin-bottom: 2rem;
}

.model-l {
  flex: 5;
}

.title {
  font-size: 3.2rem;
  color: rgb(0, 0, 0);
  font-weight: bolder;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.details {
  font-size: 2.4rem;
  color: rgb(153, 153, 153);
  padding-top: 2rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: 180%;
}

.model-r {
  flex: 2;
  padding-left: 2rem;
}

.model-r img {
  width: 15rem;
  height: 15rem;
}
</style>
