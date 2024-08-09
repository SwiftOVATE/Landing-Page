import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { TagPage } from "../pages/TagPage"
import { GetData } from "../data/GetData"
import { useEffect, useState } from "react"

export const Route_Items = [
    { name: "Home", link: "/", element: <Home /> },
    { name: "Home", link: "/Landing-Page/", element: <Home /> },
    { name: "Home", link: "/Landing-Page/Tag/*", element: <TagPage /> },
]

export const ProjectRoutes = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const storedData = localStorage.getItem('personal_data');
            const data = storedData ? JSON.parse(storedData) : [];
            console.log(data);
            setShow(data.length > 5);
        }, 1000);

        return () => clearTimeout(timer); // Clean up the timeout if the component unmounts
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            <BrowserRouter>

                <GetData />
                {
                    show &&
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
                }
            </BrowserRouter>
        </div>
    )
}