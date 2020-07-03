import home from './pages/home'
import about from './pages/about'
import article from './pages/article'
import article2 from './pages/article2'
import archive from './pages/archive'
import list from './pages/list'

const routes = [{
        path: '/',
        component: home
    },
    {
        path: '/index',
        name: 'index',
        component: home
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },
    {
        path: '/archive',
        name: 'archive',
        component: archive
    },
    {
        path: '/tag/:name',
        name: 'tag',
        component: archive
    },
    {
        path: '/article',
        name: 'article',
        component: article
    },
    {
        path: '/article2',
        name: 'article2',
        component: article2
    },
    {
        path: '/list',
        name: 'list',
        component: list
    },
    {
        path: '*',
        redirect: '/'
    }
]
export default routes;