import { useState, useEffect} from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ja } from "date-fns/locale";
import { useAppDispatch } from "@/hooks";
import { updateTodo } from "@/features/todos/operations";

interface DatePickerProps extends React.HTMLAttributes<HTMLButtonElement> {
    taskId: number;
    defaultDate: Date | undefined;
}

export function DatePicker({ taskId, defaultDate, ...props }: DatePickerProps) {
    const dispatch = useAppDispatch();
    const [date, setDate] = useState<Date | undefined>(defaultDate);

    useEffect(() => {
        setDate(defaultDate)
    }, [defaultDate])

    const handleSelect = async (date: Date | undefined) => {        
        try {
            await dispatch(
                updateTodo({
                    id: taskId,
                    updates: { dueDate: date },
                })
            );
            setDate(date);
            
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <button {...props}>
                    {/* <CalendarIcon /> */}
                    <span className="pr-1">期日</span>
                    {date ? format(date, "yyyy年M月d日") : "指定なし"}
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 mx-5 bg-white border-gray-200">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleSelect}
                    locale={ja}
                />
            </PopoverContent>
        </Popover>
    );
}
