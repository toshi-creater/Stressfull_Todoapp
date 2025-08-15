import type { TaskListT } from "../types";
import { EmptyListView } from "./emptyListView";
import { TaskItem } from "./taskItem";
import { TodoDetailContext } from "@/provider/context/TodoDetailContext";
import { useContext } from "react";

interface TaskListProps {
    todos: TaskListT;
}

const TaskList = ({ todos }: TaskListProps) => {
    const { setTodoDetail } = useContext(TodoDetailContext);
    const notDoneTodos = todos.filter((todo) => todo.isDone === false);
    const doneTodos = todos.filter((todo) => todo.isDone === true);

    const taskClickHandler = (id: number) => {
        const todo = todos.find((todo) => id === todo.id);
        if (todo) setTodoDetail(todo);
    };

    if (notDoneTodos.length === 0 && doneTodos.length === 0) {
        return (
            <EmptyListView />
        );
    }

    return (
        <div>
            <ul role="list" className="space-y-2 mb-5">
                {notDoneTodos.map((todo) => {
                    return (
                        <TaskItem
                            task={todo}
                            key={todo.id}
                            onClick={taskClickHandler}
                        />
                    );
                })}
            </ul>
            {doneTodos.length > 0 && (
                <>
                    <div className="mb-2">
                        <span className="py-1 px-2 rounded-full bg-gray-100 text-gray-700 text-sm">
                            完了済み
                        </span>
                    </div>
                    <ul role="list" className="space-y-3">
                        {doneTodos.map((todo) => {
                            return (
                                <TaskItem
                                    task={todo}
                                    key={todo.id}
                                    onClick={taskClickHandler}
                                />
                            );
                        })}
                    </ul>
                </>
            )}
        </div>
    );
};

export { TaskList };
