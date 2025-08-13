import { Sidebar } from "@/components/sidebar"

export const AppLayout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <div className="flex sm:ml-64 h-screen">
                {children}
            </div>
        </>
    )
}