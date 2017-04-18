<template lang="html">
  <div class="index">
    <router-link class="link" to="/machine">机器列表页</router-link>
    <router-link class="link" to="/models">模型列表页</router-link>
    <router-link class="link" to="/service">我的服务</router-link>
    <router-link class="link" to="/reserve">我的预约</router-link>
    <router-link class="link" to="/position">我的位置</router-link>
  </div>
</template>

<style scoped>
.link {
  display: block;
  padding: 5rem;
  color: blue;
  text-decoration: none;
}
</style>
