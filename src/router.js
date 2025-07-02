import { createRouter, createWebHistory } from 'vue-router';

// Define your components for each route
import Home from './components/Home.vue';
import About from './components/About.vue';
import Profile from './components/Profile.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
