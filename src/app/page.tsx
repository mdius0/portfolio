"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Observer } from "gsap/Observer"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

type fn = (a: number) => number

export default () => {
  // gsap.registerPlugin(Observer)
  // let current = 0
  const ref = useRef(null)
  // const [animating, setAnimating] = useState(false)
  // const [currentIndex, setCurrentIndex] = useState(-1)
  // const [outerWrappers, setOuterWrapper] = useState(() => { return gsap.utils.toArray(".outer") })
  // const [innerWrappers, SetInnerWrapper] = useState(() => { return gsap.utils.toArray(".inner") })
  // const [sections, setSections] = useState(() => { return document.querySelectorAll("section") })
  // const [headings, setHeadings] = useState(() => { return gsap.utils.toArray(".section-heading") })
  // //@ts-ignore
  // const [splitHeadings, setSplitHeadings] = useState(() => headings.map(heading => new SplitText(heading, {type: "chars,words,lines", linesClass: "clip-text"})))
  // const [wrap, setWrap] = useState<fn>(gsap.utils.wrap(0, sections.length))


  // const goToSection = (index: number, direction: number) => {
  //   index = wrap(index)
  //   setAnimating(true)
  //   let fromTop = direction === -1, dFactor = fromTop ? -1 : 1, tl = gsap.timeline({
  //     defaults: { duration: 1.25, ease: "power1.inOut" },
  //     onComplete: () => setAnimating(false)
  //   });
  //   if (currentIndex >= 0) {
  //     // The first time this function runs, current is -1
  //     gsap.set(sections[currentIndex], { zIndex: 0 });
  //   }
  //   gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
  //   tl.fromTo([outerWrappers[index], innerWrappers[index]], {
  //     yPercent: i => i ? -100 * dFactor : 100 * dFactor
  //   }, {
  //     yPercent: 0
  //   }, 0)
  //     .fromTo(splitHeadings[index].chars, {
  //       autoAlpha: 0,
  //       yPercent: 150 * dFactor
  //     }, {
  //       autoAlpha: 1,
  //       yPercent: 0,
  //       duration: 1,
  //       ease: "power2",
  //       stagger: {
  //         each: 0.02,
  //         from: "random"
  //       }
  //     }, 0.2)

  //   setCurrentIndex(index)
  // }

  // useGSAP(() => {
  //   Observer.create({
  //     type: "wheel,touch",
  //     wheelSpeed: -1,
  //     tolerance: 10,
  //     preventDefault: true,
  //     onDown: () => !animating && goToSection(current - 1, -1),
  //     onUp: () => !animating && goToSection(current + 1, 1),
  //   })
  // }, { scope: ref })

  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center justify-center gap-2" ref={ref}>
      <section className="flex flex-col items-center justify-center h-screen bg-zinc-900 w-full relative p-16 gap-4">
        <h1 className="section-heading text-white font-bold text-7xl">mdius</h1>

        {/* <div className="w-full h-2 bg-white my-2"></div> */}

        <div className="flex items-center justify-center gap-2">
          <Link className="w-full bg-white text-zinc-900 font-bold text-lg hover:w-[120%] px-4 py-2 flex transtition-all duration-200 items-center justify-center gap-2" href={"https://www.github.com/mdius0"}><Image src={"/github-mark.svg"} width={25} height={25} alt="github-logo"/>Github</Link>
          <Link className="w-full bg-white text-zinc-900 font-bold text-lg hover:w-[120%] px-4 py-2 flex transtition-all duration-200 items-center justify-center" href={"#"}>Twitter</Link>
          <Link className="w-full bg-white text-zinc-900 font-bold text-lg hover:w-[120%] px-4 py-2 flex transtition-all duration-200 items-center justify-center" href={"#"}>Discord</Link>
        </div>

        <div className="absolute w-8 h-8 bottom-2 left-2 border-l-4 border-b-4 border-l-white border-b-white"></div>
        <div className="absolute w-8 h-8 top-2 right-2 border-t-4 border-r-4 border-r-white border-t-white"></div>
      </section>
      <section className="flex flex-col items-start justify-center h-screen bg-red-500 w-full relative p-16">
        <h1 className="section-heading text-zinc-900 font-bold text-9xl">About me</h1>

        <div className="w-full h-1/2 flex items-center justify-center">
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <div className="h-full w-full bg-zinc-900"></div>
            <div className="flex w-full h-4 items-center justify-between gap-2">
              <div className="w-full hover:w-[150%] transition-all duration-200 h-full bg-zinc-800"></div>
              <div className="w-full hover:w-[150%] transition-all duration-200 h-full bg-zinc-900"></div>
              <div className="w-full hover:w-[150%] transition-all duration-200 h-full bg-zinc-800"></div>
              <div className="w-full hover:w-[150%] transition-all duration-200 h-full bg-zinc-800"></div>
            </div>
          </div>
          <div className="h-full w-[80%] mx-4 flex flex-col items-start justify-start">
            <h3 className="text-5xl font-bold text-zinc-900">Tab One</h3>
            <p className="text-xl font-semibold text-zinc-800 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet itaque quibusdam debitis, voluptas minima laborum qui cupiditate. Totam, recusandae illum. Eos earum libero exercitationem quisquam necessitatibus totam, nobis ullam.
            </p>
          </div>
        </div>

        <div className="absolute w-8 h-8 bottom-2 left-2 border-l-4 border-b-4 border-l-zinc-900 border-b-zinc-900"></div>
        <div className="absolute w-8 h-8 top-2 right-2 border-t-4 border-r-4 border-r-zinc-900 border-t-zinc-900"></div>
      </section>
      <section className="flex flex-col gap-2 items-center justify-center h-screen bg-zinc-900 w-full relative">
        <h1 className="section-heading text-white/20 font-bold text-2xl">next project in</h1>
        <h1 className="section-heading text-white font-bold text-9xl my-2">00:00:00</h1>

        <div className="bg-white group p-2 relative hover:p-4 duration-300 transition-all cursor-pointer">
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