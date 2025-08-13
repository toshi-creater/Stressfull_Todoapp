import type { TaskItemT } from "../types";
import { DoneCheck } from "./doneCheck";
import { ImportantIconButton } from "./ImportantIconButton";

interface TaskItemProps {
    task: TaskItemT
    onClick: (id: number) => void
}

const TaskItem = ({ task, onClick }: TaskItemProps) => {
    
    const dateFormat = (date: string) => {
        const [year, month, day] = date.split("-")
        return `${year}年${month}月${day}日`
    }
    
    return (
        <li
            key={task.id}
            className="flex items-center justify-between gap-x-6 px-5 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
            onClick={() => onClick(task.id)}
        >
            <div className="flex items-center gap-x-4 h-[25px]">
                <DoneCheck taskId={task.id} defaultIsDone={task.isDone} />
                {/* <input
                    type="checkbox"
                    onChange={() => {}}
                    className="mt-1 w-4 h-4 accent-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                /> */}
                <div className="flex flex-col">
                    <p className={"text-sm font-medium " + (task.isDone ? "text-gray-500 line-through" : "text-gray-900")}>
                        {task.title}
                    </p>
                    {task.dueDate && <p className="text-xs text-gray-500 mt-1">{dateFormat(task.dueDate.toString())}</p>}
                </div>
            </div>
            <ImportantIconButton 
                taskId={task.id} 
                defaultIsImportant={task.isImportant} 
                strokeWidth={"1px"} 
                size={"20px"} />
        </li>
    );
};

export { TaskItem };
