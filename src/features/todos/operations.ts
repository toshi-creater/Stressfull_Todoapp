import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodosFromDB, insertTodoToDB, updateTodoToDB } from "../../lib/todoService";
import type { InsertTodoInput, UpdateTodoInput } from "../../types";
import { addTodo, editTodo, setTodo } from "./slice";

export const fetchTodo = createAsyncThunk(
    'todos/fetchTodo',
    async (userId: string, thunkAPI) => {
        const data = await fetchTodosFromDB(userId)                
        thunkAPI.dispatch(setTodo(data))

        return data
    }
)

export const insertTodo = createAsyncThunk(
    'todos/addTodo',
    async (todo: InsertTodoInput, thunkAPI) => {
       const data = await insertTodoToDB(todo)
       thunkAPI.dispatch(addTodo(data))
       return data
    }
)

export const updateTodo = createAsyncThunk(
    'todos/editTodo',
    async (params: UpdateTodoInput,
        thunkAPI) => {
        const data = await updateTodoToDB({id: params.id, updates: params.updates})
        
        thunkAPI.dispatch(editTodo(data))

        return data
    }
)