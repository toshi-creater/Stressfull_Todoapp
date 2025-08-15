import type { Icons } from "../components/icons"

export type TaskItemT = {
    id: number,
    title: string,
    memo: string,
    dueDate: Date | null,
    isDone: boolean,
    isImportant: boolean,
    userId: string,
    scheduledDate: Date | string | null;
}

export type TaskListT = TaskItemT[]

export type User = {
    email: string,
    password: string
}

export type InsertTodoInput = {
  title: string;
  user_id: string;
}

export type UpdateTodoInput = {
    id: number,
    updates: Partial<Pick<TaskItemT, "title" | "memo" | "dueDate" | "isDone" | "isImportant" | "scheduledDate">>
}

export type SidebarNav = {
    title: string,
    href: string,
    icon: keyof typeof Icons
}

export type SidebarConfig = {
    sidebarNav: SidebarNav[]
}

export type TaskPage = {
    title: string,
    href: string,
    emptyIcon: string,
    emptyText: string
}

export type TaskPageConfig = {
    taskPage: TaskPage[]
}