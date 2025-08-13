import { useState } from "react";
import { Sidebar } from "../../components/sidebar";
import { TaskDetail } from "../../components/taskDetail";
import { TaskInputBar } from "../../components/taskInputBar";
import { TaskList } from "../../components/taskList";
import { getAllTodos, getTodoStatus } from "../../features/todos/selectors";
import { useAppSelector } from "../../hooks";
import type { TaskItemT } from "@/types";

export default function TodoPage() {

    const todos = useAppSelector(getAllTodos)    
    const status = useAppSelector(getTodoStatus)

    const [ todoDetail, setTodoDetail ] = useState<TaskItemT>();
    const taskClickHandler = (id: number) => {        
        const todo = todos.find(todo => id === todo.id )
        if(todo) setTodoDetail(todo)
    }

    return (
        <>
            <Sidebar />
            <div className="flex sm:ml-64 h-screen">
                <div className="container mx-auto px-5 relative">
                    <h1 className="text-2xl font-semibold text-gray-800 my-4 tracking-tight">
                        今日のタスク
                    </h1>
                    {status === "loading" ? (
                        <p>Loading</p>
                    ) : (
                        <TaskList todos={todos} onClick={taskClickHandler} />
                    )}
                    <TaskInputBar />
                </div>
                {todoDetail && <TaskDetail todo={todoDetail} />}
            </div>
        </>
    );
}
