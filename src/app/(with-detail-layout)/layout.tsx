"use client";
import BackToHomeButton from "@/components/BacktoHome";
import "../globals.css";

export default function DetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <nav className="w-full sticky top-0 z-[1000] h-[70px] bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
                <div className="flex items-center w-[88%] max-w-6xl mx-auto h-full">
                    <a href="/" className="flex items-center gap-1">
                        <span className="text-[20px] font-bold text-white">jae</span>
                        <span className="text-[20px] font-bold text-indigo-400">.dev</span>
                    </a>
                </div>
            </nav>
            <div className="min-h-[calc(100vh-70px)] bg-zinc-950 flex flex-col items-center">
                {children}
            </div>
            <BackToHomeButton />
        </>
    );
}
