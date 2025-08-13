import { TaskList } from "@/components/taskList"
import { getDoneTodos } from "@/features/todos/selectors"
import { useAppSelector } from "@/hooks"
import { TodoLayout } from "@/layout/TodoLayout"

export const DonePage = () => {
    const todos = useAppSelector(getDoneTodos) 

    return (
        <TodoLayout>
            <TaskList todos={todos} />
        </TodoLayout>
    )
}