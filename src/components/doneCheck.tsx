import { updateTodo } from "@/features/todos/operations"
import { useAppDispatch } from "@/hooks"
import { useEffect, useState, type HTMLAttributes } from "react"

interface DoneCheckProps extends HTMLAttributes<HTMLInputElement> {
    taskId: number,
    defaultIsDone: boolean
}

export const DoneCheck = ({ taskId, defaultIsDone, ...props}: DoneCheckProps) => {
    const dispatch = useAppDispatch()
    const [ isDone, setIsDone ] = useState<boolean>(defaultIsDone)

    useEffect(() => {
        setIsDone(defaultIsDone)
    }, [taskId, defaultIsDone])

    const handleClick = async () => {
        try {
            await dispatch(updateTodo({
                id: taskId,
                updates: { isDone: !isDone }
            }))

            setIsDone(!isDone)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <input
            type="checkbox"
            onChange={handleClick}
            className="mt-1 w-4 h-4 accent-blue-600 rounded focus:ring-2 focus:ring-blue-500"
            {...props}
            checked={isDone ? true : false}
        />
    )
}