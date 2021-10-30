import one from './components/routercom/one.vue';
import two from './components/routercom/two.vue';
import three from './components/routercom/three.vue';
import four from './components/routercom/four.vue';
import home from './components/routercom/home.vue';


export const routes = [
    { path: '', component: home },
    { path: '/one', component: one , children : [
        { path:'two', component:two},
        { path:'three', component:three},
        { path:':id', component:four},
        ]
    },
    // { path: '/two', component: two },
    // { path: '/three', component: three },
    // { path: '/four', component: four }
];