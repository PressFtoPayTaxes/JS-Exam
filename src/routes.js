import VueRouter from 'vue-router'
import Start from './components/Start'
import Choise from './components/Choise'
import New from './components/NewPlan'
import Plans from './components/PlansList'
import Plan from './components/Plan'
import Report from './components/Report'

export default new VueRouter({
    routes:[
        {
            path: '/',
            component: Start,
            name: 'start'
        },
        {
            path: '/choose',
            component: Choise,
            name: 'choise'

        },
        {
            path: '/new',
            component: New,
            name: 'new'
        },
        {
            path: '/list',
            component: Plans,
            name: 'list'
        },
        {
            path: '/plan/:id',
            component: Plan, 
            name: 'plan'
        },
        {
            path: '/report/:id',
            component: Report,
            name: 'report'
        }
    ]
});