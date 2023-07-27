import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./component/Auth/Login/Login";
import Register from "./component/Auth/Register/Register";
import DashBoard from "./component/DashBoard/DashBoard";
import AlertNofication from "./component/UI/AlertNotification/AlertNofication";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <AlertNofication />
    </>
  );
}

export default App;
