import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { ScrollTop } from "../hooks/ScrollTop"
import { TagPage } from "../pages/TagPage"

export const Route_Items = [
    { name: "Home", link: "/", element: <Home /> },
    { name: "Home", link: "/Landing-Page/", element: <Home /> },
    { name: "Home", link: "/Landing-Page/Tag/*", element: <TagPage /> },
]

export const ProjectRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                {/* <ProjectNavbar /> */}

                <Routes>
                    {
                        Route_Items.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={item.link}
                                    element={item.element} />
                            )
                        })
                    }
                </Routes>

                <ScrollTop col={"green"} />

            </BrowserRouter>
        </div>
    )
}