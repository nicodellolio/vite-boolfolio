import { createWebHistory, createRouter } from 'vue-router'
import AppHome from './components/views/AppHome.vue';
import AppProjects from './components/views/AppProjects.vue';
import AppAbout from './components/views/AppAbout.vue';
import AppContacts from './components/views/AppContacts.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        }
    ]
})

export default router;