import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DocumentationView from '../views/DocumentationView.vue';
import ApiView from '../views/ApiView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            title: 'Excel Functions Reference - Systemset Co'
        }
    },
    {
        path: '/docs',
        name: 'Documentation',
        component: DocumentationView,
        meta: {
            title: 'Documentation - Excel Functions Reference'
        }
    },
    {
        path: '/api',
        name: 'API',
        component: ApiView,
        meta: {
            title: 'API Reference - Excel Functions Reference'
        }
    },
    {
        // 404 redirect to home
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

// Update page title on route change
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Excel Functions Reference';
    next();
});

export default router;
