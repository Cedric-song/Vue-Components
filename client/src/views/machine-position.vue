<template lang="html">
  <div class="position">
    <transition name="slide-fade">
      <div class="p1">
        <div class="map" id="map"  :style="mapStyle">
          <!-- <iframe src="http://apis.map.qq.com/tools/poimarker?type=0&marker=coord:39.96554,116.26719;title:成都;addr:北京市海淀区复兴路32号院|coord:39.87803,116.19025;title:成都园;addr:北京市丰台区射击场路15号北京园博园|coord:39.88129,116.27062;title:老成都;addr:北京市丰台区岳各庄梅市口路西府景园六号楼底商|coord:39.9982,116.19015;title:北京园博园成都园;addr:北京市丰台区园博园内&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp"></iframe> -->
        </div>
        <div class="info">
          <v-touch v-on:swipeup="goto" class="swipe">
          <div class="icon-swipe">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-up"></use>
            </svg>
          </div>
          <base-info :info="info"></base-info>
          <div class="line-bottom">
            <div class="b-left">
              <virtual-circle class="vc" circleColor="#fdaaaa" :circlePercent="circlePercent[0].percent" circleAmount="1元" :circleStatus="circlePercent[0].circleStatus"></virtual-circle>
              <virtual-circle class="vc" circleColor="#b6e8ec" :circlePercent="circlePercent[1].percent" circleAmount="5角" :circleStatus="circlePercent[1].circleStatus"></virtual-circle>
              <virtual-circle class="vc" circleColor="#f6e181" :circlePercent="circlePercent[2].percent" circleAmount="1角" :circleStatus="circlePercent[2].circleStatus"></virtual-circle>
            </div>
            <div class="b-right">
              <div class="tags">
                <tag-font class="tag" :text="tag.text" v-for="tag,index in tags" :key="index"></tag-font>
              </div>
            </div>
          </div>
          </v-touch>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import BaseInfo from '../components/base-info.vue'
import VirtualCircle from '../components/virtual-circle.vue'
import TagFont from '../components/tag-font.vue'
import TMAP from 'TMAP'
export default {
  name: 'position',
  components: {
    BaseInfo,
    VirtualCircle,
    TagFont
  },
  data() {
    return {
      mapStyle: {
        height: '82rem'
      },
      info: {
        locationid: '1',
        title: '春田硬币兑换机',
        reserve: '预定',
        distance: '17.1km',
        address: '大连市甘镜子区一大春田'
      },
      tags: [
        {
          text: '纸币兑换券'
        },
        {
          text: '纸币兑换券'
        },
        {
          text: '纸币兑换券'
        },
        {
          text: '纸币兑换券'
        },
        {
          text: '纸币兑换券'
        }
      ],
      circlePercent: [
        {
          percent: 0.1,
          circleStatus: '缺少'
        },
        {
          percent: 0.3,
          circleStatus: '不足'
        },
        {
          percent: 0.9,
          circleStatus: '充足'
        }
      ]
    }
  },
  methods: {
    goto() {
      this.$router.push('/machine/details')
      console.log(`goto: '/machine/details'`)
    }
  },
  mounted() {
    const geolocation = new TMAP.maps.Geolocation()
    geolocation.getLocation(function (position) {
      console.log('坐标：'.concat(position.lat, ',', position.lng))
      createIframe('http://apis.map.qq.com/tools/poimarker?type=0&marker=coord:39.96554,116.26719;title:成都;addr:北京市海淀区复兴路32号院|coord:39.87803,116.19025;title:成都园;addr:北京市丰台区射击场路15号北京园博园|coord:39.88129,116.27062;title:老成都;addr:北京市丰台区岳各庄梅市口路西府景园六号楼底商|coord:39.9982,116.19015;title:北京园博园成都园;addr:北京市丰台区园博园内&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp')
    })
  }
}

function createIframe(src) {
  let dom = document.createElement('iframe')
  dom.src = src
  dom.style = 'height:100%;width:100%;'
  document.querySelector('#map').appendChild(dom)
}
</script>

<style scoped>
.p1 {
  background-color: #fff;
  position: relative;
}

.info {
  position: absolute;
  width: 100%;
  background-color: #fff;
}

iframe {
  border: 0;
}

.icon-swipe {
  text-align: center;
  padding-top: .5rem;
}

.icon {
  width: 2rem;
  height: 2rem;
  overflow: hidden;
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
