import { useState } from "react";
import { Icons } from "./icons";
import { useAppDispatch, useAppSelector } from "../hooks";
import { insertTodo } from "../features/todos/operations";
import type { InsertTodoInput } from "../types";

const TaskInputBar = () => {
    const user = useAppSelector((state) => state.auth.user)
    if(!user) {
        throw new Error("ログインに異常が発生しました");
    }
    const [ text, setText ] = useState<string>("")
    const dispatch = useAppDispatch()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if(!text) return

        const newTodo: InsertTodoInput = {
            title: text,
            user_id: user.id
        }
        try {
            await dispatch(insertTodo(newTodo)).unwrap()
            setText("")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="fixed left-56 bottom-5 bg-white w-[calc(100%-theme(space.56))]">
            <form onSubmit={handleSubmit} className="px-5">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <Icons.Add color="#A4A9B2" />
                    </div>
                    <input
                        type="search"
                        name="todo-title-input"
                        value={text}
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="タスクの追加"
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export { TaskInputBar };
