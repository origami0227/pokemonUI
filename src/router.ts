import {createWebHashHistory, createRouter} from 'vue-router'
import home from './views/home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: home},//访问根路径时渲染Origami
        {path:'/doc',component:Doc,children:[
                {path:'switch',component:SwitchDemo}
            ]}
    ]
})
router.afterEach(()=>{

})