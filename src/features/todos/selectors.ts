import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { TaskListT } from "@/types";
import { getToday } from "@/lib/utils";

export const getTodoStatus = (state: RootState) => state.todo.status

export const getAllTodos = (state: RootState) => state.todo.items

export const getTodayTodos = createSelector(
    (state: RootState) => state.todo.items,
    (todos: TaskListT) => {        
        return todos.filter((todo) => todo.scheduledDate === getToday() && todo.isDone === false)
    }
)

export const getImportantTodos = createSelector(
    (state: RootState) => state.todo.items,
    (todos: TaskListT) => todos.filter((todo) => todo.isImportant === true && todo.isDone === false)
)

export const getDoneTodos = createSelector(
    (state: RootState) => state.todo.items,
    (todos: TaskListT) => todos.filter((todo) => todo.isDone === true)
)

export const getTodobyId = createSelector(
    [
        getAllTodos,
        (state: RootState, taskId: number) => taskId
    ],
    (todos, taskId) => todos.find((todo) => todo.id === taskId)
)

    