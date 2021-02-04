import Login from '@/pages/Login'

import Dashboard from '@/pages/Dashboard'
import Category from '@/pages/Category'
import Option2 from '@/pages/Option2'
import Option3 from '@/pages/Option3'
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
                path: '/option2',
                component: Option2,
                name: 'option2',
                meta: {
                    title: 'Option2 - Tsuru'
                }
            },
            {
                path: '/option3',
                component: Option3,
                name: 'option3',
                meta: {
                    title: 'Option3 - Tsuru'
                }
            },
        ]
    },

]

export default routes