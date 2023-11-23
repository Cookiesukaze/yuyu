import Vue from 'vue'
import VueRouter from 'vue-router'
import Chat from "@/components/Chat/ChatPage.vue";
import ChatInnerBot from "@/components/Chat/ChatInnerBot.vue";
import ChatInner from "@/components/Chat/ChatInner.vue";
import PsycPage from "@/components/Psyc/PsycPage.vue";
import AppointmentPage from "@/components/Psyc/AppointmentPage.vue";
import NoticePage from "@/components/Psyc/NoticePage.vue";
import AllAppointment from "@/components/Psyc/AllAppointment.vue";
import AppointmentExpertChoose from "@/components/Psyc/AppointmentExpertChoose.vue";
import AppointmentTimeChoose from "@/components/Psyc/AppointmentTimeChoose.vue";
import AccAppointment from "@/components/Psyc/AccAppointment.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/chat'
  },
  {
    path:'/chat',
    name:'Chat',
    component: Chat,
    props:true,
  },
  {
    path:'/chatinnerbot',
    name:'ChatInnerBot',
    component: ChatInnerBot
  },
  {
    path:'/chatinner',
    name:'ChatInner',
    component: ChatInner,
    props:true,
  },
  {
    path:'/psyc',
    name:'Psyc',
    component: PsycPage,
  },
  {
    path:'/appointment',
    name:'Appointment',
    component: AppointmentPage,
  },
  {
    path:'/notice',
    name:'Notice',
    component: NoticePage,
  },
  {
    path:'/allappointment',
    name:'AllAppointent',
    component: AllAppointment,
  },
  {
    path:'/expertchoose',
    name:'ExpertChoose',
    component: AppointmentExpertChoose,
    props:true,
  },
  {
    path:'/timechoose',
    name:'TimeChoose',
    component: AppointmentTimeChoose,
    props:true,
  },
  {
    path:'/accappointment',
    name:'AccAppointment',
    component: AccAppointment,
    props:true,
  },
]

const router = new VueRouter({
  mode:"hash",
  routes
})

export default router

