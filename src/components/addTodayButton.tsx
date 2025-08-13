import { updateTodo } from "@/features/todos/operations";
import { useAppDispatch } from "@/hooks";
import { useEffect, useState, type HTMLAttributes } from "react";
import { Icons } from "./icons";
import { getToday } from "@/lib/utils";

interface AddTodayButtonProps extends HTMLAttributes<HTMLButtonElement> {
    taskId: number;
    defaultScheduledDate: Date | string | undefined;
}

export const AddTodayButton = ({
    taskId,
    defaultScheduledDate,
    ...props
}: AddTodayButtonProps) => {    
    
    const dispatch = useAppDispatch();
    const initIsToday = defaultScheduledDate === getToday() ? true : false
    
    const [isToday, setIsToday] = useState<boolean>(initIsToday);

    useEffect(() => {
        setIsToday(initIsToday);
    }, [initIsToday, taskId]);

    const handleClick = async () => {
        let scheduledDate = null;
        if(!isToday) {
            scheduledDate = new Date()
        }
        try {            
            await dispatch(
                updateTodo({
                    id: taskId,
                    updates: { scheduledDate: scheduledDate },
                })
            );
            setIsToday(!isToday);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button
            className="text-left w-full border-b border-gray-200 text-sm pl-1 py-3 focus:outline-none focus:border-blue-500 focus:ring-0 resize-none"
            onClick={handleClick}
            {...props}
        >
            <span className="flex items-center">
                <Icons.Today strokeWidth={"1px"} size={"16px"} />
                <span className="pl-1">{isToday ? "今日の予定" : "今日の予定に追加"}</span>
            </span>
        </button>
    );
};
