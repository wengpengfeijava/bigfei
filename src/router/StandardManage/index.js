import Javascript from '@/views/StandardManage/Javascript.vue'
import Css from '@/views/StandardManage/Css.vue'
import Home from '@/views/Home.vue'

export default {
  path: '/StandardManage',
  name: 'StandardManage',
  component: Home,
  children: [
    {
      path: 'Javascript',
      name: 'Javascript',
      component: Javascript
    },
    {
      path: 'Css',
      name: 'Css',
      component: Css
    }
  ]
}
