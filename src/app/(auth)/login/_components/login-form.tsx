import {loginSchema, LoginSchema} from "@/src/validation/auth";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import {useActionState} from "react";

export default function Login() {
    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const [loginState, loginAction, isPendingLogin] = useActionState(
        
    )


    return (
        <div>

        </div>
    )
}