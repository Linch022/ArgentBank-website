import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const user = useSelector((state) => state.auth.user);
    const token = localStorage.getItem("token");

    const authUser = (user && token);
    if (authUser) {
        return <Outlet />
    } else return <Navigate to="/sign-in" replace/>
}

export default ProtectedRoute;