<template lang="html">
    <div class="model-item">
      <div class="img">
        <img :src="info.image_url" alt="">
      </div>
      <p class="title">{{ info.machine_name }}</p>

      <div class="intro">
        产品功能
      </div>
      <div class="describe">
        <div class="item" v-for="item,index in info.describe" :key="index">
          <div class="item-name">
            <i></i>
            <p>{{ item.title }}</p>
          </div>
          <div class="item-content">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import rootUrl from '../api/index'
export default {
  name: 'model-item',
  data() {
    return {
      info: {}
    }
  },
  beforeMount() {
    this.axios.get(rootUrl.machineDetail.concat(`?id=${this.$route.params.id}`)).then((response) => {
      this.info = response.data.result
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style scoped>
.model-item {
  padding-top: 4rem;
  background-color: #fff;
}

.img {
  margin: 0 10rem 4rem 10rem;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  height: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.img img {
  height: 28rem;
  width: 20rem;
}

.title {
  font-size: 3.2rem;
  color: rgb(0, 0, 0);
  font-weight: bolder;
  text-align: center;
}

.intro {
  font-size: 2.8rem;
  color: rgb(68, 193, 207);
  margin: 2rem 4rem;
  border: 1px solid rgb(68, 193, 207);
  text-align: center;
  border-radius: 4px;
  padding: 1rem;
}

.item {
  margin: 4rem 4rem;
}

.item-name {
  position: relative;
}

.item-name i {
  display: inline-block;
  width: 4rem;
  height: 4rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('../assets/images/icon.png');
  position: absolute;
}

.item p {
  padding-left: 5rem;
  display: inline-block;
  font-size: 2.8rem;
  color: rgb(0, 0, 0);
  font-weight: bolder;
}

.item-content {
  font-size: 2.4rem;
  color: rgb(102, 102, 102);
  text-indent: 3em;
  padding-top: 1rem;
}
</style>
