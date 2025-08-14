import { TaskDetail } from "@/components/taskDetail";
import { TaskInputBar } from "@/components/taskInputBar";
import { getTodoStatus } from "@/features/todos/selectors";
import { useAppSelector } from "@/hooks";
import type { TaskItemT } from "@/types";
import { useState } from "react";
import { AppLayout } from "./AppLayout";
import { TodoDetailContext } from "@/provider/context/TodoDetailContext";

export const TodoLayout = ({ children }) => {
    const status = useAppSelector(getTodoStatus);
    const [todoDetail, setTodoDetail] = useState<TaskItemT>();

    return (
        <AppLayout>
            <TodoDetailContext.Provider value={{ setTodoDetail }}>
                <div className="container mx-auto px-5 relative">
                    <div className="pt-5">
                        <h1 className="text-2xl font-semibold text-gray-800 my-4 tracking-tight">
                            今日のタスク
                        </h1>
                    </div>
                    {status === "loading" ? <p>Loading</p> : children}
                    <TaskInputBar />
                </div>
                {todoDetail && <TaskDetail todo={todoDetail} />}
            </TodoDetailContext.Provider>
        </AppLayout>
    );
};
