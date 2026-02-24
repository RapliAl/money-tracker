import {cookies} from "next/dist/server/request/cookies";
import {createServerClient} from "@supabase/ssr";

export async function createClient() {
    const cookiesStore = await cookies()

    return createServerClient(
        process.env.NEXT_SUPABASE_PUBLIC_URL!,
        process.env.NEXT_SUPABASE_PUBLIC_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookiesStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({name, value, options}) =>
                            cookiesStore.set(name, value, options)
                        );
                    } catch {
                        
                    }
                }
            }
        }
    )
}