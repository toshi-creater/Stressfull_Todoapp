import { updateTodo } from "@/features/todos/operations"
import { useAppDispatch } from "@/hooks"
import { useEffect, useState } from "react"

interface InputMemoProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    taskId: number
    defaultMemo: string
}

const InputMemo = ({ taskId, defaultMemo, ...props }: InputMemoProps) => {
    const dispatch = useAppDispatch()
    const [ memo, setMemo ] = useState<string>(defaultMemo)

    useEffect(() => {
        setMemo(defaultMemo)
    }, [defaultMemo])

    const handlerBlur = async (memo: string) => {
        try {
            await dispatch(updateTodo({
                id: taskId,
                updates: {memo: memo}
            }))

            setMemo(memo)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <textarea
            id="note"
            name="note"
            rows={4}
            className="w-full border-b border-gray-200 text-sm pl-1 py-2 focus:outline-none focus:border-blue-500 focus:ring-0 resize-none"
            placeholder="メモを追加"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            onBlur={() => handlerBlur(memo)}
            {...props}
        />
    )
}

export { InputMemo }