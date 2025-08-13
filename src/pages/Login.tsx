import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../hooks";
import { signin } from "../features/auth/authThunks";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/input";
import { AuthButton } from "../components/authButton";
import { InputLabel } from "../components/inputLabel";

const schema = z.object({
    email: z.email("メールアドレスの形式が正しくありません。"),
    password: z.string().min(1, "パスワードは必須です。"),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
    const user = useAppSelector((state) => state.auth.user);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const dispatch = useAppDispatch();

    const onSubmit = async (data: FormData) => {
        dispatch(signin(data));
    };

    useEffect(() => {
        if (user) {
            navigate("/app/all");
        }
    }, [user, navigate]);

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
                        Sign in
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <InputLabel>Email address</InputLabel>
                            <Input type="email" {...register("email")}/>
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <InputLabel>Password</InputLabel>
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <Input type="password" {...register("password")} />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>

                        <AuthButton>
                          {isSubmitting ? "Sign in" : "Sign in"} 
                        </AuthButton> 
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        新規登録する場合は
                        <a
                            href="/Register"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            こちら
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
