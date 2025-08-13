import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";

export default function AuthGuard() {
    const user = useAppSelector((state) => state.auth.user)
    return user ? <Outlet /> : <Navigate to="/login" replace />
}