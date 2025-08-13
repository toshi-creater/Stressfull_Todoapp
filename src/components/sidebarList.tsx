import { sidebarConfig } from "../config/SidebarConfig";
import { SidebarItem } from "./sidebarItem";

const SidebarList = () => {
    const items = sidebarConfig.sidebarNav

    return (
        <ul className="space-y-2 font-medium mb-5">
            {items.map((item, index) => {
                return <SidebarItem key={index} href={item.href} name={item.title} icon={item.icon} />
            })}
            {/* <SidebarItem key="1" href="#" name="今日のタスク" />
            <SidebarItem key="2" href="#" name="重要タスク" />
            <SidebarItem key="3" href="#" name="すべてのタスク" />
            <SidebarItem key="4" href="#" name="完了済みタスク" /> */}
        </ul>
    );
};

export { SidebarList };
