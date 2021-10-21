import VueRouter from 'vue-router'

import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";
import Detail from "../pages/Detail";


export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          name: 'sNews',
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children:[
            {
              name:'xxx',
              path:'detail/:id/:title',
              component:Detail,
            }
          ]
        }
      ]
    },
  ]
})
