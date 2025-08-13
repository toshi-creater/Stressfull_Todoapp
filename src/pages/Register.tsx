import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabase"
import { Input } from "../components/input"
import { AuthButton } from "../components/authButton"
import { InputLabel } from "../components/inputLabel"

const schema = z.object({
    email: z.email("メールアドレスの形式が正しくありません。"),
    password: z.string().min(1, "パスワードは必須です。"),
    confirmPassword: z.string()
})
.refine((data) => data.password === data.confirmPassword, {
    message: "パスワードが一致しません。",
    path: ["confirmPassword"]
})

type FormData = z.infer<typeof schema>


export default function Register() {
    const navigate = useNavigate();
    const [error, setError] = useState<string>('')

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        const {email, password} = data
        const {error} = await supabase.auth.signUp({email, password})

        if(error) {
            setError(error.message)
        } else {
            navigate("/login")
        }
    }
    
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign up
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {error && <p className="text-red-500">{error}</p>}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <InputLabel>Email address</InputLabel>
                            <Input type="email" {...register("email")} />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>

                        <div>
                            <InputLabel>Password</InputLabel>
                            <Input type="password" {...register("password")} />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>

                        <div>
                            <InputLabel>Confirm password</InputLabel>
                            <Input type="password" {...register("confirmPassword")} />
                            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                        </div>
                        <AuthButton>
                          {isSubmitting ? "Sign up" : "Sign up"}
                        </AuthButton> 
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        サインインは
                        <a
                            href="/Login"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            こちら
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}