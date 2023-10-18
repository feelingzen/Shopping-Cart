import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
import Store from "./Components/Store";

function Router () {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <ErrorPage />
        },
        {
            path: 'store',
            element: <Store />
        }
    ])
    
    return (
        <RouterProvider router={router}/>
    )
}

export default Router