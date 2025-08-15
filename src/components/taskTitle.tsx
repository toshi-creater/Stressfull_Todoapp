import { sidebarConfig } from "@/config/AppConfig"
import { useLocation } from "react-router-dom"

export const TaskTitle = () => {
    const pathName = useLocation().pathname
    const nav = sidebarConfig.sidebarNav.find((nav) => nav.href === pathName)

    return (
        <div className="pt-5">
            <h1 className="text-2xl font-semibold text-gray-800 my-4 tracking-tight">
                {nav ? nav.title : "タスク"}
            </h1>
        </div>
    )
}