import type { TaskItemT } from "@/types";
import { createContext } from "react";

interface TodoDetailContextProps {
    setTodoDetail: (todo: TaskItemT) => void 
}
export const TodoDetailContext = createContext<TodoDetailContextProps>({
    setTodoDetail: () => {
        throw new Error("TodoDetailContext not provcided");
        
    }
}) 