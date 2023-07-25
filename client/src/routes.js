import Crosswords from "./pages/Crosswords/Crosswords"
import Info from "./pages/Info"

export const privateRoutes = [

]

export const publicRoutes = [
    { path: '/info', component: Info },
    { path: '/crosswords', component: Crosswords },
]