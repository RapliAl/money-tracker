import {NextRequest} from "next/dist/server/web/spec-extension/request";
import {NextResponse} from "next/dist/server/web/spec-extension/response";
import {createServerClient} from "@supabase/ssr";

export async function updateSession(request: NextRequest) {
    const supabaseResponse = NextResponse.next({
        request,
    })

    const supabase = createServerClient(
        process.env.NEXT_SUPABASE_PUBLIC_URL!,
        process.env.NEXT_SUPABASE_PUBLIC_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return supabaseResponse.cookies.getAll();
                }
            }
        }
    )
}