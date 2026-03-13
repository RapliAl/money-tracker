import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import { DarkModeToggle } from "@/components/common/darkmode-toggle";
import FaultyTerminal from "@/components/ui/faulty-terminal";

export default function Home() {
    return (
        <div className="relative min-h-svh">
            <div className="absolute inset-0 z-0">
                <FaultyTerminal
                    scale={1.5}
                    gridMul={[2, 1]}
                    digitSize={1.2}
                    timeScale={0.5}
                    pause={false}
                    scanlineIntensity={0.5}
                    glitchAmount={1}
                    flickerAmount={1}
                    noiseAmp={1}
                    chromaticAberration={0}
                    dither={0}
                    curvature={0.1}
                    tint="#0e6902"
                    mouseReact
                    mouseStrength={0.5}
                    pageLoadAnimation
                    brightness={0.6}
                />
            </div>
            <div className="relative z-10 flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
                <div className="absolute top-4 right-4">
                    <DarkModeToggle />
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="font-bold items-center font-bebas-neue text-center text-8xl">
                        Kendali Penuh Atas
                        <br />
                        Setiap Rupiahmu
                    </h1>
                    <p className="items-center text-center text-xl text-white/60 mt-4">
                        Aplikasi pencatat keuangan super cepat untuk bantu lo tetep
                        bisa gaya,
                        <br />
                        tanpa harus mengorbankan isi tabungan masa depan.
                    </p>
                </div>
                <div className="htext-center col-span-2 bg-[#F7E7CE]/50 dark:hover:bg-[#F7E7CE]/70 hover:bg-[#F7E7CE]/50 rounded-lg">
                    <Link href="/dashboard">
                        <Button variant="outline">
                            <p className="font-semibold"> Get Started </p>
                        </Button>
                    </Link>
                </div>
            </div>
        </div >
    )
}
