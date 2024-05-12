"use client"

import { ArrowDown, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page({ params: { id } }: { params: { id: string } }) {
    const router = useRouter()

    return (
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-center">

            <section className="flex flex-col items-center justify-center h-screen bg-zinc-900 w-full relative p-16 gap-4 hero">
                <div className="absolute bottom-2 border-2 p-2 border-white flex items-center text-white justify-center gap-2">
                    <ArrowDown />
                </div>
                <div className="w-full flex items-center justify-start absolute top-4 px-16">
                    <div className="p-0 border-2 border-white flex">
                        <div className="flex-grow hover:bg-zinc-700 duration-200 transition-colors p-2 text-white cursor-pointer" onClick={() => router.push("/")}>Home</div>
                        <div className="flex-grow hover:bg-zinc-700 duration-200 transition-colors p-2 text-white cursor-pointer" onClick={() => router.push("/projects")}>Projects</div>
                        <div className="flex-grow duration-200 transition-colors p-2 text-zinc-900 cursor-pointer bg-white">Project {id}</div>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col items-center gap-2 justify-center">
                    <div className="h-[80%] w-full bg-white"></div>
                    <div className="flex items-center justify-between w-full">
                        <h1 className="text-xl font-bold text-white">Project {id}</h1>
                        <div className="flex gap-2">
                            <h3 className="text-zinc-300 underline font-semibold text-md cursor-pointer">project.com</h3>
                            <h3 className="text-zinc-300 underline font-semibold text-md cursor-pointer">github.com/project</h3>
                        </div>
                        <h3 className="text-md font-semibold text-amber-500 flex gap-2"><Clock /> Status: ongoing</h3>
                    </div>

                </div>
            </section>
            <section className="flex flex-col items-center justify-center h-screen bg-zinc-900 w-full relative p-8">
                <h1 className="text-5xl font-bold text-white text-start w-full my-4">Synopsis</h1>
            </section>
            <section className="flex flex-col items-center justify-center h-screen bg-zinc-900 w-full relative p-8">
                <h1 className="text-5xl font-bold text-white text-start w-full my-4">Commits</h1>
                <div>Timeline</div>
            </section>
        </div>
    )
}