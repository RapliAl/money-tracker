import {NextRequest} from "next/dist/server/web/spec-extension/request";
import {NextResponse} from "next/dist/server/web/spec-extension/response";
import {createServerClient} from "@supabase/ssr";

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    })

    const supabase = createServerClient(
        process.env.NEXT_SUPABASE_PUBLIC_URL!,
        process.env.NEXT_SUPABASE_PUBLIC_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return supabaseResponse.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({name, value, options}) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({name, value, options}) => supabaseResponse.cookies.set(name, value, options))
                }
            }
        }
    )

    await supabase.auth.getUser();

    return supabaseResponse;
}