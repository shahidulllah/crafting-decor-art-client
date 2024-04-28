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
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import MyCardList from "./Pages/MyCardList";
import UpdatePage from "./Pages/UpdatePage";


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
            element: <PrivateRoute><AddItemsForm></AddItemsForm></PrivateRoute>
        },
        {
            path: "/updateForm/:id",
            element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:2000/userItem/${params.id}`)
        },
        {
            path: "/viewDetails/:id",
            element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
            loader: ()=> fetch('http://localhost:2000/userItem')
        },
        {
            path: "/myCard",
            element: <PrivateRoute><MyCardList></MyCardList></PrivateRoute>,
            loader: ()=> fetch('http://localhost:2000/userItem')
        },
      ]
    }
  ]);