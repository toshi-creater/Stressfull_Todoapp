import { supabase } from "@/lib/supabase";
import { Button } from "./ui/button"
import { logout } from "@/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks";

export const LogoutButton = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const handleLogout = async () => {
            await supabase.auth.signOut();
            dispatch(logout());
            navigate("/login");
        };
        
    return (
        <div className="flex justify-center p-3">
            <Button className="w-full text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200" onClick={handleLogout}>ログアウト</Button>
        </div>
    )
}