import {Button} from "@/components/ui/button";
import Link from "next/dist/client/link";
import {DarkModeToggle} from "@/components/common/darkmode-toggle";

export default function Home() {
    return (
        <>
            <div className="justify-between">
                <DarkModeToggle/>
            </div>
            <div className="bg-muted flex justify-center items-center h-screen flex-col space-y-4">
                <h1 className="font-bold items-center justify-between"> Welcome to this App </h1>
                <Button variant="outline" className="bg-blue-200 hover:bg-blue-400 text-white-500 hover:text-white-600">
                    <Link href="/dashboard">
                        <p className="font-semibold"> Go to Dashboard Panel </p>
                    </Link>
                </Button>
            </div>
        </>
    )
}
