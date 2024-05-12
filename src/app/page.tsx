"use client"

import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { ArrowDown } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  const [aboutState, setAboutState] = useState(0)
  const router = useRouter()
  const ref = useRef(null)
  useGSAP(() => {
    const t1 = gsap.timeline({
      markers: true,
      scrollTrigger: {
        scrub: 1,
        pin: true,
        trigger: ".hero",
        start: "top",
        endTrigger: ".about",
        end: "top top",
      },
    })

    const t2 = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        pin: true,
        trigger: ".about",
        start: "0% 0%",
        endTrigger: ".next",
        end: "0% 100%",
        onUpdate: (self) => {
          setAboutState(0)
          if (self.progress >= 0.25) setAboutState(1)
          if (self.progress >= 0.5) setAboutState(2)
          if (self.progress >= 0.75) setAboutState(3)
        },

        // onEnter: () => {
        //   gsap.from(".about-content", {
        //     duration: 1,
        //     opacity: 0,
        //     delay: 1,
        //     stagger: 0.5,
        //     y: 10
        //   })
        // }
      }
    })
  }, { scope: ref })

  function scrollToSection() {
    //implement later
  }

  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center justify-center" ref={ref}>
      {/* <div className="fixed top-0 w-full bg-zinc-900 border border-white p-2"></div> */}
      <section className="flex flex-col items-center justify-center h-screen bg-zinc-900 w-full relative p-16 gap-4 hero">
        <h1 className="section-heading text-white font-bold text-7xl">mdius</h1>

        {/* <div className="w-full h-2 bg-white my-2"></div> */}

        <div className="flex items-center justify-center gap-2">
          <Link className="w-full bg-white text-zinc-900 font-bold text-lg hover:w-[120%] px-4 py-2 flex transtition-all duration-200 items-center justify-center gap-2" href={"https://www.github.com/mdius0"}><Image src={"/github-mark.svg"} width={25} height={25} alt="github-logo" />Github</Link>
          <Link className="w-full bg-white text-zinc-900 font-bold text-lg hover:w-[120%] px-4 py-2 flex transtition-all duration-200 items-center justify-center" href={"#"}>Twitter</Link>
          <Link className="w-full bg-white text-zinc-900 font-bold text-lg hover:w-[120%] px-4 py-2 flex transtition-all duration-200 items-center justify-center" href={"#"}>Discord</Link>
        </div>

        <div className="absolute w-8 h-8 top-2 left-2 border-l-4 border-t-4 border-l-white border-t-white"></div>
        <div className="absolute w-8 h-8 top-2 right-2 border-t-4 border-r-4 border-r-white border-t-white"></div>
        
        <div className="w-full flex items-center justify-center absolute top-2">
          <div className="p-0 border-2 border-white flex">
            <div className="flex-grow duration-200 transition-colors p-2 text-zinc-900 cursor-pointer bg-white">Home</div>
            <div className="flex-grow hover:bg-zinc-700 duration-200 transition-colors p-2 text-white cursor-pointer" onClick={() => router.push("/projects")}>Projects</div>
          </div>
        </div>

        <div className="absolute bottom-2 border-2 p-2 border-white flex items-center text-white justify-center gap-2" onClick={() => scrollToSection()}>
          <ArrowDown />
        </div>
      </section>
      <section className="flex flex-col items-start justify-center h-screen bg-red-500 w-full relative p-16 about bg-grainy">
        <h1 className="section-heading text-zinc-900 font-bold text-9xl about-content">About me</h1>

        <div className="w-full h-1/2 flex items-center justify-center">
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 about-content">
            <div className="h-full w-full bg-zinc-900"></div>
            <div className="flex w-full h-4 items-center justify-between gap-2">
              <div className={cn("w-full transition-all duration-200 h-full bg-zinc-800", {
                "w-[150%] bg-zinc-900": aboutState == 0
              })}></div>
              <div className={cn("w-full transition-all duration-200 h-full bg-zinc-800", {
                "w-[150%] bg-zinc-900": aboutState == 1
              })}></div>
              <div className={cn("w-full transition-all duration-200 h-full bg-zinc-800", {
                "w-[150%] bg-zinc-900": aboutState == 2
              })}></div>
              <div className={cn("w-full transition-all duration-200 h-full bg-zinc-800", {
                "w-[150%] bg-zinc-900": aboutState == 3
              })}></div>
            </div>
          </div>
          {aboutState == 0 && <div className="h-full w-[80%] mx-4 flex flex-col items-start justify-start about-content">
            <h3 className="text-5xl font-bold text-zinc-900">Tab One</h3>
            <p className="text-xl font-semibold text-zinc-800 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet itaque quibusdam debitis, voluptas minima laborum qui cupiditate. Totam, recusandae illum. Eos earum libero exercitationem quisquam necessitatibus totam, nobis ullam.
            </p>
          </div>}
          {aboutState == 1 && <div className="h-full w-[80%] mx-4 flex flex-col items-start justify-start about-content">
            <h3 className="text-5xl font-bold text-zinc-900">Tab Two</h3>
            <p className="text-xl font-semibold text-zinc-800 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet itaque quibusdam debitis, voluptas minima laborum qui cupiditate. Totam, recusandae illum. Eos earum libero exercitationem quisquam necessitatibus totam, nobis ullam.
            </p>
          </div>}
          {aboutState == 2 && <div className="h-full w-[80%] mx-4 flex flex-col items-start justify-start about-content">
            <h3 className="text-5xl font-bold text-zinc-900">Tab Three</h3>
            <p className="text-xl font-semibold text-zinc-800 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet itaque quibusdam debitis, voluptas minima laborum qui cupiditate. Totam, recusandae illum. Eos earum libero exercitationem quisquam necessitatibus totam, nobis ullam.
            </p>
          </div>}
          {aboutState == 3 && <div className="h-full w-[80%] mx-4 flex flex-col items-start justify-start about-content">
            <h3 className="text-5xl font-bold text-zinc-900">Tab Four</h3>
            <p className="text-xl font-semibold text-zinc-800 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet itaque quibusdam debitis, voluptas minima laborum qui cupiditate. Totam, recusandae illum. Eos earum libero exercitationem quisquam necessitatibus totam, nobis ullam.
            </p>
          </div>}
        </div>

        <div className="absolute w-8 h-8 bottom-2 left-2 border-l-4 border-b-4 border-l-zinc-900 border-b-zinc-900"></div>
        <div className="absolute w-8 h-8 top-2 right-2 border-t-4 border-r-4 border-r-zinc-900 border-t-zinc-900"></div>
      </section>

      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>

      <section className="flex flex-col gap-2 items-center justify-center h-screen bg-zinc-900 w-full relative next">
        <h1 className="section-heading text-white/20 font-bold text-2xl">next project in</h1>
        <h1 className="section-heading text-white font-bold text-9xl my-2">00:00:00</h1>

        <div className="bg-white group p-2 relative hover:p-4 duration-300 transition-all cursor-pointer" onClick={() => router.push("/projects")}>
          <h1 className="text-xl font-semibold cursor-pointer px-2">Projects</h1>

          <div className="absolute w-2 h-2 duration-200 transition-all group-hover:w-4 group-hover:h-4 bottom-2 left-2 border-l-4 border-b-4 border-l-zinc-900 border-b-zinc-900"></div>
          <div className="absolute w-2 h-2 duration-200 transition-all group-hover:w-4 group-hover:h-4 top-2 right-2 border-t-4 border-r-4 border-r-zinc-900 border-t-zinc-900"></div>
        </div>
        <div className="absolute w-8 h-8 bottom-2 left-2 border-l-4 border-b-4 border-l-white border-b-white"></div>
        <div className="absolute w-8 h-8 top-2 right-2 border-t-4 border-r-4 border-r-white border-t-white"></div>

      </section>
    </div>
  )
}