"use client"

import { ArrowDown, CircleCheck, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

export default function Page() {
    const ref = useRef(null)
    const router = useRouter()

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller")

        // if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        //     addAnimation();
        // }
        addAnimation()
        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", "true")
            })
        }
    }, [])


    return (
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-center" ref={ref}>
            <section className="flex flex-col items-center justify-center h-screen bg-zinc-900 w-full relative p-16 gap-4 hero">
                <h1 className="section-heading text-white font-bold text-7xl">Projects</h1>

                <div className="absolute w-8 h-8 bottom-2 left-2 border-l-4 border-b-4 border-l-white border-b-white"></div>
                <div className="absolute w-8 h-8 top-2 right-2 border-t-4 border-r-4 border-r-white border-t-white"></div>
                <div className="absolute bottom-2 border-2 p-2 border-white flex items-center text-white justify-center gap-2">
                    <ArrowDown />
                </div>
            </section>
            <section className="flex flex-col items-center justify-center h-screen bg-zinc-900 w-full relative p-8">
                <h1 className="text-5xl font-bold text-white text-start w-full my-4  bg-grainy bg-emerald-950 py-2">Completed</h1>
                <div className="w-full flex flex-wrap gap-2 overflow-y-scroll relative">
                    <div onClick={() => router.push("/projects/1")} className="absolute bottom-2 border-2 p-2 border-white flex items-center text-white justify-center gap-2">
                        <ArrowDown />
                    </div>
                    <div onClick={() => router.push("/projects/1")} className="relative cursor-pointer flex flex-col items-center justify-center gap-2 h-[20rem] w-[25rem]">
                        <div className="w-full h-[80%] bg-zinc-400 bg-grainy"></div>
                        <div className="w-full flex items-center justify-between">
                            <div className="h-full flex flex-col">
                                <h1 className="text-white text-xl font-semibold">Project One</h1>
                                <h3 className="text-sm text-emerald-400 flex gap-2"><CircleCheck /> Completed 5/11/24</h3>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => router.push("/projects/1")} className="relative cursor-pointer flex flex-col items-center justify-center gap-2 h-[20rem] w-[25rem]">
                        <div className="w-full h-[80%] bg-zinc-400 bg-grainy"></div>
                        <div className="w-full flex items-center justify-between">
                            <div className="h-full flex flex-col">
                                <h1 className="text-white text-xl font-semibold">Project Two</h1>
                                <h3 className="text-sm text-emerald-400 flex gap-2"><CircleCheck /> Completed 5/11/24</h3>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => router.push("/projects/1")} className="relative cursor-pointer flex flex-col items-center justify-center gap-2 h-[20rem] w-[25rem]">
                        <div className="w-full h-[80%] bg-zinc-400 bg-grainy"></div>
                        <div className="w-full flex items-center justify-between">
                            <div className="h-full flex flex-col">
                                <h1 className="text-white text-xl font-semibold">Project Three</h1>
                                <h3 className="text-sm text-emerald-400 flex gap-2"><CircleCheck /> Completed 5/11/24</h3>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => router.push("/projects/1")} className="relative cursor-pointer flex flex-col items-center justify-center gap-2 h-[20rem] w-[25rem]">
                        <div className="w-full h-[80%] bg-zinc-400 bg-grainy"></div>
                        <div className="w-full flex items-center justify-between">
                            <div className="h-full flex flex-col">
                                <h1 className="text-white text-xl font-semibold">Project Four</h1>
                                <h3 className="text-sm text-emerald-400 flex gap-2"><CircleCheck /> Completed 5/11/24</h3>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => router.push("/projects/1")} className="relative cursor-pointer flex flex-col items-center justify-center gap-2 h-[20rem] w-[25rem]">
                        <div className="w-full h-[80%] bg-zinc-400 bg-grainy"></div>
                        <div className="w-full flex items-center justify-between">
                            <div className="h-full flex flex-col">
                                <h1 className="text-white text-xl font-semibold">Project Five</h1>
                                <h3 className="text-sm text-emerald-400 flex gap-2"><CircleCheck /> Completed 5/11/24</h3>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => router.push("/projects/1")} className="relative cursor-pointer flex flex-col items-center justify-center gap-2 h-[20rem] w-[25rem]">
                        <div className="w-full h-[80%] bg-zinc-400 bg-grainy"></div>
                        <div className="w-full flex items-center justify-between">
                            <div className="h-full flex flex-col">
                                <h1 className="text-white text-xl font-semibold">Project Six</h1>
                                <h3 className="text-sm text-emerald-400 flex gap-2"><CircleCheck /> Completed 5/11/24</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center h-screen bg-zinc-900 w-full relative p-8">
                <h1 className="text-5xl font-bold text-white text-start w-full my-4 bg-grainy bg-amber-950 py-2">Working on</h1>
                <div className="w-full flex flex-wrap gap-2 overflow-y-scroll relative">
                    <div onClick={() => router.push("/projects/1")} className="relative cursor-pointer flex flex-col items-center justify-center gap-2 h-[20rem] w-[25rem]">
                        <div className="w-full h-[80%] bg-zinc-400 bg-grainy"></div>
                        <div className="w-full flex items-center justify-between">
                            <div className="h-full flex flex-col">
                                <h1 className="text-white text-xl font-semibold">Project One</h1>
                                <h3 className="text-sm text-amber-400 flex gap-2"><Clock />5/11/24 to 5/11/25</h3>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => router.push("/projects/1")} className="relative cursor-pointer flex flex-col items-center justify-center gap-2 h-[20rem] w-[25rem] ">
                        <div className="w-full h-[80%] bg-zinc-400 bg-grainy"></div>
                        <div className="w-full flex items-center justify-between">
                            <div className="h-full flex flex-col">
                                <h1 className="text-white text-xl font-semibold">Project Two</h1>
                                <h3 className="text-sm text-amber-400 flex gap-2"><Clock />5/11/24 to 5/11/25</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}