import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Users from "./pages/users/Users"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Menu from "./components/Menu/Menu"

function App() {

  const Layout = () => {
    return (
      
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menu__container">
            <Menu />
          </div>
          <div className="content__container">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, 
      children: [
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
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
