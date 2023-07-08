
//react element 
import React, { Suspense, lazy } from 'react'
import ReactDOM from "react-dom/client";
import Header from './common/header/Header';
import Body from './components/body/Body';
import"./App.css"
import { createBrowserRouter ,RouterProvider,Outlet} from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ErrorPage from './components/error';
import RestoMenu from './components/restroMenu/RestroMenu';
//import Grocery from './components/Grocery';
const Grocery = lazy(()=>import("./components/Grocery"))
const App = ()=> {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element:  <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <RestoMenu />,
      },
      {
        path: "/grocery",
        element:
        <Suspense fallback={"fff"}>
         <Grocery />
         </Suspense>
         ,
      }
    ],
    errorElement:<ErrorPage />
  },
  
]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)