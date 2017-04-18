<template lang="html">
  <div class="circle" :circleColor="circleColor" :circlePercent="circlePercent">
    <div class="right">
      <div class="rightcircle" :style="rcStyle"></div>
    </div>
    <div class="left">
      <div class="leftcircle" :style="lcStyle"></div>
    </div>
    <div class="mask">
      <p class="title" >{{ circleAmount }}</p>
      <p class="status" :style="statusStyle">{{ circleStatus }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'virtual-circle',
  props: {
    circleColor: {
      type: String,
      default: '#fdaaaa'
    },
    circlePercent: {
      type: Number,
      default: 1
    },
    circleAmount: {
      type: String,
      default: '1元'
    },
    circleStatus: {
      type: String,
      default: '充足'
    }
  },
  data() {
    return {
      style: `background-color:${this.$props.circleColor};`
    }
  },
  computed: {
    rcStyle() {
      let percent = this.$props.circlePercent
      if (percent <= 0.5) {
        return this.style.concat(`transform: rotate(${percent * 360 - 180}deg);`)
      }
      return this.style
    },
    lcStyle() {
      let percent = this.$props.circlePercent
      if (percent > 0.5) {
        return this.style.concat(`transform: rotate(${percent * 360 - 360}deg);`)
      }
      return this.style
    },
    statusStyle() {
      return `color:${this.$props.circleColor};`
    }
  }
}
</script>

<style scoped>
.circle {
  display: inline-block;
  width: 12rem;
  height: 12rem;
  background-color: #e0dddd;
  border-radius: 50%;
  position: relative;
}

.mask {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.circle p {
  text-align: center;
}

.title {
  font-size: 2.8rem;
  color: #666;
}

.status {
  font-size: 2rem;
  color: #fdaaaa;
}

.right,
.left {
  width: 12rem;
  height: 12rem;
  position: absolute;
  top: 0;
  left: 0;
}

.right,
.rightcircle {
  clip: rect(0, auto, auto, 6rem);
}

.left,
.leftcircle {
  clip: rect(0, 6rem, auto, 0);
}

.rightcircle {
  display: block;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  /*transform: rotate(-162deg);*/
}

.leftcircle {
  display: block;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  transform: rotate(-180deg);
}

.mask {
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  left: 1.5rem;
  top: 1.5rem;
  background: #fff;
  position: absolute;
  text-align: center;
}
</style>
