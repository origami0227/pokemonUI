import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Origami from './components/Origami.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Origami}//访问根路径时渲染Origami
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
