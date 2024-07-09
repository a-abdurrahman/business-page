import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./RootLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import BookingPage from "./pages/BookingPage"


function App() {
  const mainRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index:true , element: <HomePage /> },
          { path:"about", element: <AboutPage/>},
          { path:"booking", element: <BookingPage/>},
        ],
      },
    ]
  )
  

  return (
    <>
      <RouterProvider router={mainRouter}/>
    </>
  )
}

export default App
