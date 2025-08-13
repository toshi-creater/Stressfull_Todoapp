import type { InsertTodoInput, UpdateTodoInput } from "../types";
import { supabase } from "./supabase";
import { camelToSnake, snakeToCamel } from "./utils";

export const fetchTodosFromDB = async (
    userId: string
) => {
    const { data, error } = await supabase
        .from("todos")
        .select("*")
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

    if(error) throw error

    return snakeToCamel(data)
}

export const insertTodoToDB = async (
    todo: InsertTodoInput
) => {
    const { data, error } = await supabase
        .from("todos")
        .insert([todo])
        .select()
        .single()

    if(error) throw error

    return snakeToCamel(data)
}

export const updateTodoToDB = async ({
    id,
    updates
}: UpdateTodoInput) => {    
    const _updates = camelToSnake(updates)    
    const { data, error } = await supabase
        .from("todos")
        .update(_updates)
        .eq("id", id)
        .select()
        .single()

    if(error) throw error
    
    return snakeToCamel(data)
}

