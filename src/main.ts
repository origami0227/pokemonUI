import {createApp} from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory, createRouter} from 'vue-router'
import home from './views/home.vue'
import Doc from './views/Doc.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: home},//访问根路径时渲染Origami
        {path:'/doc',component:Doc}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
