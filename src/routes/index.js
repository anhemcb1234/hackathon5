import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
export const router = new VueRouter({
    routes:[
        {
            path:'/Home',
            name:'HomePageAdmin',
            component:()=>import('../page/HomePageAdmin.vue'),
        },
        {
            path:'/',
            name:'login',
            component:()=>import('../page/LoginAdmin.vue'),
        },
        {
            path:'/user',
            name:'user',
            component:()=>import('../page/DeatilUser.vue'),
        },
        {
            path:'/add-user',
            name:'add-user',
            component:()=>import('../page/AddUser.vue'),
        }

    ],
    mode: "history"
})