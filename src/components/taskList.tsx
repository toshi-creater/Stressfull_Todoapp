import type { TaskListT } from "../types";
import { TaskItem } from "./taskItem";
import { TodoDetailContext } from "@/provider/context/TodoDetailContext"
import { useContext } from "react"

interface TaskListProps {
    todos: TaskListT
}

const TaskList = ({ todos }: TaskListProps) => {
    const { setTodoDetail } = useContext(TodoDetailContext)
    const taskClickHandler = (id: number) => {       
        const todo = todos.find(todo => id === todo.id )
        if(todo) setTodoDetail(todo)
    }

    return (
        <ul role="list" className="space-y-3">
            {todos.map((todo) => {
                return <TaskItem task={todo} key={todo.id} onClick={taskClickHandler} />;
            })}
        </ul>
    );
};

export { TaskList }
