import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./RootLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import BookingPage from "./pages/BookingPage"
import MenuPage from "./pages/MenuPage"
import FeedbackPage from "./pages/FeedbackPage"


function App() {
  const mainRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index:true , element: <HomePage /> },
          { path:"menu", element: <MenuPage/>},
          { path:"about", element: <AboutPage/>},
          { path:"booking", element: <BookingPage/>},
          { path:"feedback", element: <FeedbackPage/>},
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
