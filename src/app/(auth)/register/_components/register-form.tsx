"use client"

import { registerSchema, RegisterSchema } from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { register } from "../../action";
import { INITIAL_STATE_REGISTER_FORM } from "@/constants/auth-constants";
import { startTransition, useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, Loader2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import FormInput from "@/components/common/form-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Link from "next/link";

export default function RegisterForm() {
    const form = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        }
    })

    const [registerState, registerAction, isPendingRegister] = useActionState(
        register,
        INITIAL_STATE_REGISTER_FORM
    )

    const onSubmit = form.handleSubmit(async (data) => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value)
        })
        startTransition(() => {
            registerAction(formData)
        })
    })

    useEffect(() => {
        if (registerState?.status === "error") {
            toast.error("Register Failed", {
                description: registerState.errors?._form?.[0]
            })
        }
    }, [registerState])

    return (
        <Card className="dark:bg-deep-green bg-deep-green">
            <CardHeader>
                <CardTitle className="text-center font-bold text-3xl">
                    <div className="flex justify-center items-center gap-2 font-bebas-neue text-[#F7E7CE]">
                        <BadgeDollarSign className="size-10 flex" />
                        Money Tracker
                    </div>
                </CardTitle>
                <Separator />
                <CardTitle className="font-bebas-neue mt-6 text-xl dark:text-white text-white">Register</CardTitle>
                <CardDescription className="font-bebas-neue mb-3">
                    Please enter your email and password to register for an account.
                </CardDescription>
            </CardHeader>
            <CardContent className="dark:text-white text-white">
                <Form {...form}>
                    <form onSubmit={onSubmit} className="space-y-4 font-bebas-neue">
                        <FormInput
                            form={form}
                            type="email"
                            name="email"
                            label="* Email"
                            placeholder="Please Enter Your Email"
                        />
                        <FormInput
                            form={form}
                            type="text"
                            name="username"
                            label="* Username"
                            placeholder="Please Enter Your Username"
                        />
                        <FormInput
                            form={form}
                            type="password"
                            name="password"
                            label="* Password"
                            placeholder="Please Enter Your Password"
                        />
                        <FormInput
                            form={form}
                            type="password"
                            name="confirmPassword"
                            label="* Confirm Password"
                            placeholder="Please Enter Your Confirm Password"
                        />
                        <div className="flex flex-col gap-10 mt-9">
                            <Button type="submit"
                                className=" text-center col-span-2 dark:hover:bg-[#F7E7CE]/80 hover:bg-[#F7E7CE]/80 dark:bg-[#F7E7CE] bg-[#F7E7CE] text-black font-bebas-neue">
                                {isPendingRegister ? <Loader2 className="animate-spin" /> : "Register"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
            <Separator />
            <CardFooter className="justify-center dark:text-white text-white">
                <p className="text-center font-iosevka-charon text-sm">
                    Already have an account? <Link href="/login" className="hover:underline hover:text-teal-500 text-bold">Login</Link>
                </p>
            </CardFooter>
        </Card>
    )
}