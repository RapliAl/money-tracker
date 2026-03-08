import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import { DarkModeToggle } from "@/components/common/darkmode-toggle";

export default function Home() {
    return (
        <>
            <div className="justify-between">
                <DarkModeToggle />
            </div>
            <div className="bg-muted flex justify-center items-center h-screen flex-col space-y-4">
                <h1 className="font-bold items-center justify-between"> Welcome to this App </h1>
                <div className="htext-center col-span-2 dark:hover:bg-teal-500 hover:bg-teal-500 rounded-lg">
                    <Link href="/dashboard">
                        <Button variant="outline">
                            <p className="font-semibold"> Go to Dashboard Panel </p>
                        </Button>
                    </Link>
                </div>
            </div >
        </>
    )
}
