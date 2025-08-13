import { TaskList } from "@/components/taskList"
import { getImportantTodos } from "@/features/todos/selectors"
import { useAppSelector } from "@/hooks"
import { TodoLayout } from "@/layout/TodoLayout"

export const ImportantPage = () => {
    const todos = useAppSelector(getImportantTodos) 

    return (
        <TodoLayout>
            <TaskList todos={todos} />
        </TodoLayout>
    )
}