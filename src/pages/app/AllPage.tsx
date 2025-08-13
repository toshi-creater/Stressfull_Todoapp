import { TaskList } from "@/components/taskList"
import { getAllTodos } from "@/features/todos/selectors"
import { useAppSelector } from "@/hooks"
import { TodoLayout } from "@/layout/TodoLayout"

export const AllPage = () => {
    const todos = useAppSelector(getAllTodos) 

    return (
        <TodoLayout>
            <TaskList todos={todos} />
        </TodoLayout>
    )
}