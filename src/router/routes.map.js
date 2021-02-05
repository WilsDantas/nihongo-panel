import Login from '@/pages/Login'

import Dashboard from '@/pages/Dashboard'
import Category from '@/pages/Category'
import Kana from '@/pages/Kana'
const routes = [
    {
        path: '/',
        component: () => import('@/layouts/AuthTemplate'),
        children: [
            {
                path: '/',
                component: Login,
                name: 'login',
                meta: {
                    title: 'Login - Tsuru'
                }
            },
        ]
    },
    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [
            {
                path: '/dashboard',
                component: Dashboard,
                name: 'dashboard',
                meta: {
                    title: 'Dashboard - Tsuru'
                }
            },
            {
                path: '/category',
                component: Category,
                name: 'category',
                meta: {
                    title: 'Category - Tsuru'
                }
            },
            {
                path: '/kana',
                component: Kana,
                name: 'kana',
                meta: {
                    title: 'Kana - Tsuru'
                }
            },
        ]
    },

]

export default routes