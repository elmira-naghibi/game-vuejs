import one from './components/routercom/one.vue';
import two from './components/routercom/two.vue';
import three from './components/routercom/three.vue';
import four from './components/routercom/four.vue';
import six from './components/routercom/six.vue';
import seven from './components/routercom/seven.vue';
import eight from './components/routercom/eight.vue';

import home from './components/routercom/home.vue';


export const routes = [
    { path: '',name:'homme', components: {
        default:home,
        'sixcom':six,
        'sevencom':seven
        // seven:sevencom
    } },
    { path: '/one', component: one} , 
        { path:'/two', components: {
            default:two,
            'sixcom':six,
            'sevencom':seven
            // seven:sevencom
        } },
        { path:'/three/:id', component:three},
        { path:'/:id', component:four},
        { path:'/six', component:six},
        { path:'/seven', component:seven},
        { path:'/eight', component:eight}
];