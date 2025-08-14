import { SidebarList } from "./sidebarList";
import { LogoutButton } from "./logoutButton";

const Sidebar = () => {
    return (
        <aside
            id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col justify-between">
                <div>
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center ps-2.5 mb-3"
                    >
                        <img
                            src="../logo.png"
                            className="h-10 me-1"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            FLOWDO
                        </span>
                    </a>
                    <SidebarList />
                </div>
                <LogoutButton />
            </div>
        </aside>
    );
};

export { Sidebar };
