import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TaskItemT, TaskListT } from "../../types";
import { fetchTodo } from "./operations";

interface TodoState {
    items: TaskListT,
    status: string
}

const initialState: TodoState = {
    items: [],
    status: 'idle'
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodo: (state, action: PayloadAction<TaskListT>) => {
            state.items = action.payload
        },
        addTodo: (state, action: PayloadAction<TaskItemT>) => {
            state.items.push(action.payload)
        },
        editTodo: (state, action: PayloadAction<TaskItemT>) => {
            const newTodo: TaskListT = state.items.map((todo) => 
                todo.id === action.payload.id ? action.payload : todo
            )
            state.items = newTodo
        },
        deleteTodo: (state, action: PayloadAction<TaskItemT>) => {
            state.items = state.items.filter((todo) => todo.id !== action.payload.id)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTodo.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchTodo.fulfilled, (state) => {
            state.status = 'succeeded'
        })
        .addCase(fetchTodo.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export const { setTodo, addTodo, editTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer