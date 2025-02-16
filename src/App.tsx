import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Users from "./pages/users/Users"

function App() {

  const Layout = () => {
    return (
      <div className="main"></div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/users",
      element: <Users />
    },
    {
      path: "/products",
      element: <Products />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
