import { taskPageConfig } from "@/config/AppConfig"
import { useLocation } from "react-router-dom"

export const EmptyListView = () => {
    const pathName = useLocation().pathname
    const taskPage = taskPageConfig.taskPage.find((taskPage) => taskPage.href === pathName)

    return (
        <div className="flex-grow flex items-center justify-center">
            <div className="text-center pb-30">
                <img
                    className="h-[300px] inline-block"
                    src={`../../../${taskPage?.emptyIcon}`}
                    alt=""
                />
                <p className="text-gray-500">{taskPage?.emptyText}</p>
            </div>
        </div>
    )
}