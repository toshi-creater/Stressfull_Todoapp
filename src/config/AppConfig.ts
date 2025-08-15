import type { SidebarConfig, TaskPageConfig } from "../types";

export const appRoot = "/app"

export const appTitleConfig = {
    today: appRoot + "/today",
    important: appRoot + "/important",
    all: appRoot + "/all",
    done: appRoot + "/done"
}

export const appConfig = {
    login: {
        title: "",
        href: "/Login"
    },
    register: {
        title: "",
        href: "/Register"
    },
    today: {
        title: "今日のタスク",
        href: appRoot + "/today"
    },
    important: {
        title: "重要なタスク",
        href: appRoot + "/important"
    },
    all: {
        title: "全てのタスク",
        href: appRoot + "/all"
    },
    done: {
        title: "完了済みタスク",
        href: appRoot + "/done"
    },
}

export const sidebarConfig: SidebarConfig = {
    sidebarNav: [
        {
            title: appConfig.today.title,
            href: appConfig.today.href,
            icon: "Today"
        },
        {
            title: appConfig.important.title,
            href: appConfig.important.href,
            icon: "Important"
        },
        {
            title: appConfig.all.title,
            href: appConfig.all.href,
            icon: "AllTask"
        },
        {
            title: appConfig.done.title,
            href: appConfig.done.href,
            icon: "Done"
        },
    ]
} 

export const taskPageConfig: TaskPageConfig = {
    taskPage: [
        {
            title: appConfig.today.title,
            href: appConfig.today.href,
            emptyIcon: "empty-today.svg",
            emptyText: "日付を今日に設定したタスクがここに表示されます。"
        },
        {
            title: appConfig.important.title,
            href: appConfig.important.href,
            emptyIcon: "empty-important.svg",
            emptyText: "重要に設定したタスクがここに表示されます。"
        },
        {
            title: appConfig.all.title,
            href: appConfig.all.href,
            emptyIcon: "empty-all.svg",
            emptyText: "すべてのタスクがここに表示されます。"
        },
        {
            title: appConfig.done.title,
            href: appConfig.done.href,
            emptyIcon: "empty-done.svg",
            emptyText: "完了したタスクがここに表示されます。"
        }
    ]
}