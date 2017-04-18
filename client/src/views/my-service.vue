<template>
<div class="my-service">
  <div class="item" :class="{odd: index%2 === 0}" v-for="list,index in lists" :style="{backgroundColor: list.color}">
    <div class="item-img" :style="{ backgroundImage:`url(${list.image_url})`}"> </div>
    <div class="item-content">
      <div class="title">{{list.title}}</div>
      <div class="contents">
        <div class="content" v-for="item,index in list.content" :key="index">
          <p class="name">{{item.name}} :</p>
          <p class="describe" :class="{number: index===3}">{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import rootUrl from '../api/index.js'
export default {
  name: 'my-service',
  data() {
    return {
      lists: []
    }
  },
  beforeCreate() {
    let self = this
    const colors = ['#b6e8ec', '#f8dede', '#f5e9b4']
    this.axios.get(rootUrl.myService).then((response) => {
      response.data.result.map(function (item, index) {
        item.color = colors[index % 3]
        self.lists.push(item)
      })
    }).catch(function () {
      console.log('请求失败')
    })
  }
}
</script>

<style scoped>
/* even item*/

.odd .item-content {
  padding-left: 2rem;
  padding-right: 25rem;
}

.odd .item-img {
  right: 1rem;
}

.item {
  padding: 0 1rem 2rem 1rem;
  display: flex;
  position: relative;
  border-bottom: 2px solid #fff;
}

.item-img {
  position: absolute;
  top: 4rem;
  flex: 1;
  border-radius: 50%;
  width: 22rem;
  height: 22rem;
  background-size: cover;
  background-repeat: no-repeat;
}

.item-content {
  flex: 2;
  padding-top: 3rem;
  padding-left: 25rem;
}

.title {
  font-size: 3.2rem;
  color: rgb(17, 171, 183);
  padding-bottom: 2rem;
}

.content {
  display: flex;
}

.name {
  flex: 1;
}

.describe {
  flex: 3;
}

.content {
  padding-bottom: 1rem;
  font-size: 2rem;
  color: rgb(0, 0, 0);
}

.number {
  position: relative;
  top: 0.4rem;
}
</style>
