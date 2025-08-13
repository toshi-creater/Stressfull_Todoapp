import { useNavigate } from "react-router-dom";
import { SidebarList } from "./sidebarList";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { supabase } from "../lib/supabase";
import { logout } from "../features/auth/authSlice";

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        dispatch(logout());
        navigate("/login");
    };
    
    return (
        <aside
            id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <a
                    href="https://flowbite.com/"
                    className="flex items-center ps-2.5 mb-5"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-6 me-3 sm:h-7"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Flowbite
                    </span>
                </a>
                <SidebarList />
                <button onClick={handleLogout}>ログアウト</button>
            </div>
        </aside>
    );
};

export { Sidebar };
