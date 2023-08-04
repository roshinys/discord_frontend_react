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
import { useSelector } from "react-redux";

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
    element: (
      <RequireAuth redirectTo="/login">
        <DashBoard />
      </RequireAuth>
    ),
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

function RequireAuth({ redirectTo, children }) {
  const token = useSelector((state) => state.auth.token);
  return token ? <>{children}</> : <Navigate to={redirectTo} />;
}

export default App;
