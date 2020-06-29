import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);

const Message = () => import('../components/chat/message/index.vue');
const NickName = () => import('../components/chat/message/nick_name.vue');

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: NickName,
    },
    {
      path: '/chat',
      name: 'chat',
      component: Message,
      props: true,
    }
  ]
})
