import { Sidebar } from "@/components/sidebar"

export const AppLayout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <div className="flex sm:ml-56 h-screen">
                {children}
            </div>
        </>
    )
}