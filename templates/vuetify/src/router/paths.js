/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
import store from '../store'
export default [
  {
    path: '*',
    meta: {
      name: '',
      requiresAuth: true
    },
    redirect: {
      path: '/main'
    }
  },
  // This  allows you to have pages apart of the app but no rendered inside main
  {
    path: '/',
    meta: {
      name: '',
      requiresAuth: false
    },
    component: () =>
      import(/* webpackChunkName: "routes" */ `@/views/login/Login.vue`),
    // redirect if already signed in
    beforeEnter: (to, from, next) => {
      if (store.getters.authorized) {
        next('/main')
      } else {
        next()
      }
    }
  },
  // add any extra routes that you want rendered in the main as a child below. Change toolbar names here
  {
    path: '/main',
    meta: {
      name: 'Main',
      requiresAuth: true
    },
    component: () => import(`@/views/main/Main.vue`),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(`@/views/main/views/Home.vue`)
      },
      {
        path: 'about',
        meta: {
          name: 'About',
          requiresAuth: true
        },
        component: () => import(`@/views/main/views/About.vue`)
      }
    ]
  }
]
