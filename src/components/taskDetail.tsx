import type { TaskItemT } from "@/types";
import { DatePicker } from "./datePicker";
import { InputMemo } from "./inputMemo";
import { AddTodayButton } from "./addTodayButton";
import { ImportantIconButton } from "./ImportantIconButton";

interface TaskDetailProps {
    todo: TaskItemT;
}

const TaskDetail = ({ todo }: TaskDetailProps) => {    
    const initDueDateState = todo.dueDate ? todo.dueDate : undefined
    const initMemoState = todo.memo ? todo.memo : ""
    const initScheduledDate = todo.scheduledDate ? todo.scheduledDate : undefined
    
    return (
        <div className="w-80 h-screen transition-transform -translate-x-full sm:translate-x-0">
            <div className="h-full px-3 py-4 overflow-y-auto shadow">
                <div className="flex justify-between items-center border-b border-gray-200 py-5">
                    <p className="text-sm font-semibold text-gray-900">
                        {todo?.title}
                    </p>
                    <ImportantIconButton 
                        taskId={todo.id} 
                        defaultIsImportant={todo.isImportant} 
                        strokeWidth={"1px"} 
                        size={"16px"} 
                    /> 
                </div>
                <AddTodayButton taskId={todo.id} defaultScheduledDate={initScheduledDate} />
                <DatePicker taskId={todo.id} defaultDate={initDueDateState} className="text-left w-full border-b text-gray-500 border-gray-200 text-sm pl-1 py-3 focus:outline-none focus:border-blue-500 focus:ring-0" />
                <InputMemo taskId={todo.id} defaultMemo={initMemoState} />
            </div>
        </div>
    );
};

export { TaskDetail };
