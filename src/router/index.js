import {createRouter,createWebHistory} from "vue-router";
import Home from '@/views/Home-v.vue'
import About from '@/views/About-v.vue'
import Product from '@/views/Product-v.vue'
import NotFound from '@/views/NotFound-v.vue'

const routes = [
    {
        name:'Home',
        path:"/",
        component:Home,
        meta:{
            title:'Accueil'
        }, 
    },
    {
        name:"About",
        path:"/about",
        component:About,
        meta:{
            title:'About us'
        },
    },
    {
        name:"Product",
        path:"/product/:nom",
        component:Product,
        props:true,
        meta:{
            title:'Product'
        },
    },
    {
        name:"NotFound",
        path:'/:pathMatch(.*)',
        component:NotFound,
        meta:{
            title:"NotFound"
        }
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

router.afterEach((to,from)=>{
    console.log(from,to);
    document.title = to.meta.title
})

export default router