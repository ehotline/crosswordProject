import Auth from "./pages/Auth/Auth"
import Crosswords from "./pages/Crosswords/Crosswords"
import Info from "./pages/Info"
import SecretPage from "./pages/SecretPage/SecretPage"

export const ROUTE_INFO = "/info"
export const ROUTE_CROSSWORDS = "/crosswords"
export const ROUTE_AUTH = "/auth"
export const ROUTE_SECRETPAGE = "/secretPage"

export const privateRoutes = [

]

export const publicRoutes = [
    { path: ROUTE_INFO, component: Info },
    { path: ROUTE_CROSSWORDS, component: Crosswords },
    { path: ROUTE_AUTH, component: Auth},
    { path: ROUTE_SECRETPAGE, component: SecretPage }
]