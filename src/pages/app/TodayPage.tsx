import { TaskList } from "@/components/taskList"
import { getTodayTodos } from "@/features/todos/selectors"
import { useAppSelector } from "@/hooks"
import { TodoLayout } from "@/layout/TodoLayout"

export const TodayPage = () => {
    const todos = useAppSelector(getTodayTodos) 

    return (
        <TodoLayout>
            <TaskList todos={todos} />
        </TodoLayout>
    )
}