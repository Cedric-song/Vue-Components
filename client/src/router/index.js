import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'

import MachineList from '../views/machine-list.vue'
import MachineDetails from '../views/machine-details.vue'
import ModelList from '../views/model-list.vue'
import ModelItem from '../views/model-item.vue'
import Service from '../views/my-service.vue'
import Reserve from '../views/my-reserve.vue'
import MachinePosition from '../views/machine-position.vue'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      component: Index
    },
    {
      path: '/machine',
      component: MachineList
    },
    {
      path: '/machine/:id',
      component: MachineDetails
    },
    {
      path: '/models',
      component: ModelList
    },
    {
      path: '/models/:id',
      component: ModelItem
    },
    {
      path: '/service',
      component: Service
    },
    {
      path: '/reserve',
      component: Reserve
    },
    {
      path: '/position',
      component: MachinePosition
    }

  ]
})
