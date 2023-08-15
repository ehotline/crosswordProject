import Auth from "./pages/Auth/Auth"
import Crosswords from "./pages/Crosswords/Crosswords"
import Info from "./pages/Info"
import SecretPage from "./pages/SecretPage/SecretPage"

export const privateRoutes = [

]

export const publicRoutes = [
    { path: '/info', component: Info },
    { path: '/crosswords', component: Crosswords },
    { path: '/auth', component: Auth},
    { path: '/secretPage', component: SecretPage }
]