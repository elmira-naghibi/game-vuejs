import one from './components/routercom/one.vue';
import two from './components/routercom/two.vue';
import three from './components/routercom/three.vue';
import four from './components/routercom/four.vue';
import home from './components/routercom/home.vue';


export const routes = [
    { path: '', component: home },
    { path: '/one/:id', component: one },
    { path: '/two', component: two },
    { path: '/three', component: three },
    { path: '/four', component: four }
];