"use client"

import { loginSchema, LoginSchema } from "@/validation/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { startTransition, useActionState, useEffect } from "react";
import { login } from "@/app/(auth)/action";
import { INITIAL_STATE_LOGIN_FORM } from "@/constants/auth-constants";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/common/form-input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { BadgeDollarSign } from "lucide-react";
import Link from "next/link";



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
        }

    }, [loginState]);
    return (
        <Card className="bg-deep-green">
            <CardHeader>
                <CardTitle className="text-center font-bold text-3xl">
                    <div className="flex justify-center items-center gap-2 mr-4 font-bebas-neue text-[#F7E7CE]">
                        <BadgeDollarSign className="size-10 flex" />
                        Money Tracker
                    </div>
                </CardTitle>
                <Separator />
                <CardTitle className="font-bebas-neue space-y-4 mt-6">Login</CardTitle>
                <CardDescription className="font-bebas-neue">
                    Please enter your email and password to log in to your account.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={onSubmit} className="space-y-4 font-bebas-neue">
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
                        <div className="flex flex-col gap-10 mt-8">
                            <Button type="submit"
                                className=" text-center col-span-2 dark:hover:bg-[#F7E7CE] hover:bg-[#F7E7CE] font-bebas-neue">
                                {isPendingLogin ? <Loader2 className="animate-spin" /> : "Login"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
            <Separator />
            <CardFooter className="justify-center">
                <p className="text-center font-iosevka-charon text-sm">
                    Don't have an account? <Link href="/register" className="hover:underline text-bold hover:text-teal-500">Register</Link>
                </p>
            </CardFooter>
        </Card>
    )

}