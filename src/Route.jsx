import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddItemsForm from "./Pages/AddItemsForm";
import ViewDetails from "./Components/ViewDetails/ViewDetails";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/addItmeForm",
            element: <AddItemsForm></AddItemsForm>
        },
        {
            path: "/viewDetails/:id",
            element: <ViewDetails></ViewDetails>,
            loader: ()=> fetch('http://localhost:2000/userItem')
        },
      ]
    }
  ]);