"use server"

import {AuthFormState} from "@/types/auth";
import {INITIAL_STATE_LOGIN_FORM} from "@/constants/auth-constants";
import {loginSchema} from "@/validation/auth";
import {createClient} from "@/lib/supabase/server";
import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation"

export async function login(
    prevState: AuthFormState,
    formData: FormData | null
) {
    if (!formData) {
        return INITIAL_STATE_LOGIN_FORM
    }

    const validateFields = loginSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    })

    if (!validateFields.success) {
        return {
            status: "error",
            errors: {
                ...validateFields.error.flatten().fieldErrors,
                _form: ["Please fill in all required fields correctly."],
            }
        }
    }

    const supabase = await createClient()

    const {error, data: {user}} = await supabase.auth.signInWithPassword(validateFields.data)

    if (error) {
        return {
            status: "error",
            errors: {
                ...prevState.errors,
                _form: [error.message]
            }
        }
    }

    const {data: profile} = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user?.id)
        .single()

    if (profile) {
        const cookieStore = await cookies()

        cookieStore.set("user_profile", JSON.stringify(profile), {
            httpOnly: true,
            path: "/",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 365, // 1 year
        })
    }

    revalidatePath("/", "layout")
    redirect("/")
}