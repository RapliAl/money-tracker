"use client"

import {loginSchema, LoginSchema} from "@/src/validation/auth";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import {startTransition, useActionState, useEffect} from "react";
import {login} from "@/src/app/(auth)/action";
import {INITIAL_STATE_LOGIN_FORM} from "@/src/constants/auth-constants";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/src/components/ui/card";
import {toast} from "sonner";
import {Form} from "@/src/components/ui/form";
import FormInput from "@/src/components/common/form-input";
import {Button} from "@/src/components/ui/button";
import {Loader2} from "lucide-react";
import {Separator} from "@/src/components/ui/separator";

export default function Login() {
    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const [loginState, loginAction, isPendingLogin] = useActionState(
        login,
        INITIAL_STATE_LOGIN_FORM
    )

    const onSubmit = form.handleSubmit(async (data) => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        })
        startTransition(() => {
            loginAction(formData);
        })
    })

    useEffect(() => {
        if (loginState?.status === "error") {
            toast.error("Login Failed", {
                description: loginState.errors?._form?.[0]
            });
            startTransition(() => {
                loginAction(null);
            });
        }

    }, [loginAction, loginState]);
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-center font-bold text-3xl"> Money Tracker </CardTitle>
                <div className="bg-amber-50">
                    <Separator/>
                </div>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                    Please enter your email and password to log in to your account.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={onSubmit} className="space-y-4">
                        <FormInput
                            form={form}
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="Please Enter Your Email"
                        />
                        <FormInput
                            form={form}
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="Please Enter Your Password"
                        />
                    </form>
                    <div className="flex flex-col gap-10">
                        <Separator/>
                        <Button type="submit" className="text-center col-span-2 hover:bg-amber-50">
                            {isPendingLogin ? <Loader2 className="animate-spin"/> : "Login"}
                        </Button>
                    </div>
                </Form>
            </CardContent>
        </Card>
    )

}