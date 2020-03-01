import DarakProfile from './components/Profiles/DarakProfile.vue'
import JainProfile from './components/Profiles/JainProfile.vue'
import ShahProfile from './components/Profiles/ShahProfile.vue'
import HomePage from './components/HomePage/HomePage.vue'


export const routes=[
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/sumitdarak',
        component: DarakProfile
    },
    {
        path: '/bnjain',
        component: JainProfile
    },
    {
        path: '/rajivratanshah',
        component: ShahProfile
    },
    {
        path: '*',
        redirect:"/"
    }
]