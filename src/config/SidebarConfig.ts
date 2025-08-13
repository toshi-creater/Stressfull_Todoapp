import type { SidebarConfig } from "../types";

export const sidebarConfig: SidebarConfig = {
    sidebarNav: [
        {
            title: "今日のタスク",
            href: "/app/today",
            icon: "Today"
        },
        {
            title: "重要なタスク",
            href: "/app/important",
            icon: "Important"
        },
        {
            title: "全てのタスク",
            href: "/app/all",
            icon: "AllTask"
        },
        {
            title: "完了済みタスク",
            href: "/app/done",
            icon: "Done"
        },
    ]
} 