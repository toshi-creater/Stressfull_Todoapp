import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../lib/supabase";
import { logon, logout } from "./authSlice";

interface AuthUser {
    email: string,
    password: string
}

export const signup = createAsyncThunk(
    'auth/register',
    async ({ email, password }: AuthUser, thunkAPI) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        })

        if(error) throw error;

        if(data.user) {
            thunkAPI.dispatch(logon(data.user));
        }
        
        return data.user
    }
)

export const signin = createAsyncThunk(
    'auth/login',
    async ({ email, password }: AuthUser, thunkAPI) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if(error) throw error

        if(data.user) {
            thunkAPI.dispatch(logon(data.user));
        }

        return data.user;
    }
)

export const signout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        await supabase.auth.signOut()
        thunkAPI.dispatch(logout())
    }
)