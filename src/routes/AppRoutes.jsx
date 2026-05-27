import { createBrowserRouter } from "react-router-dom";
import SignIn from "../auth/signin";
import Signup from "../auth/signup";
import Layout from "../layout/layout";
import ProtectedLayout from "./ProtectedLayout";
import AuthLayout from "./Authlayout";
import Dashboard from "../pages/dashboard";
import NotFound from "../pages/Notfound";
import Contact from '../pages/contact';

const router = createBrowserRouter([
   
  {
    element: <AuthLayout />,
    children: [
      { path: "/", 
        element: <SignIn /> 
      },
      { path: "/signup", 
        element: <Signup /> 
      },
    ]
  },
  
 
  {
    element: <ProtectedLayout />,
    children: [
      {
        
        element: <Layout />, 
        children: [
          { path: "/dashboard",
            element: <Dashboard /> 
          },  
          { path: "/contact", 
            element: <Contact /> 
          },   
        ]
      },
     
      { path: "*",
        element: <NotFound />
      }
    ]
  }
]);

export default router;
