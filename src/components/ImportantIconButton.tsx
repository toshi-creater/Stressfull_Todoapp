import { useEffect, useState } from "react";
import { Icons, type IconProps } from "./icons";
import { useAppDispatch } from "@/hooks";
import { updateTodo } from "@/features/todos/operations";

interface ImportantIconButtonProps extends IconProps {
    taskId: number,
    defaultIsImportant: boolean
}

export const ImportantIconButton = ({ taskId, defaultIsImportant, ...props }: ImportantIconButtonProps) => {
    const dispatch = useAppDispatch()
    const [ isImportant, setIsImportant ] = useState<boolean>(defaultIsImportant)

    useEffect(() => {
        setIsImportant(defaultIsImportant)
    }, [taskId, defaultIsImportant])

    const handleClick = async (e) => {
        e.stopPropagation()
        try {
            await dispatch(updateTodo({
                id: taskId,
                updates: {
                    isImportant: !isImportant
                }
            }))

            setIsImportant(!isImportant)

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <button onClick={handleClick} >
            <Icons.Important {...props} color={isImportant ? "#F58CBF" : "#333"} />
        </button>
    );
};
