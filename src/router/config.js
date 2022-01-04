import Home from '../pages/home'
import Ablout from '../pages/about'

export  const routeConfig= [
    {
      path: '/home',
      exact: true,
      component: Home,
      id: 1,
      name: '首页',
      routes: []
    },
    {
      path: '/about',
      exact: true,
      component:Ablout,
      id: 1,
      name: 'about',
      routes: []
    }
  ]