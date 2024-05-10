"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Observer } from "gsap/Observer"
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
    <div className="mx-auto max-w-7xl px-2 flex flex-col items-center justify-center" ref={ref}>
      <section className="flex items-center justify-center h-screen bg-zinc-900 w-full relative">
        <h1 className="section-heading text-white font-bold text-7xl">bruh</h1>

        <div className="absolute w-8 h-8 bottom-2 left-2 border-l-4 border-b-4 border-l-white border-b-white"></div>
        <div className="absolute w-8 h-8 top-2 right-2 border-t-4 border-r-4 border-r-white border-t-white"></div>
      </section>
      <section className="flex items-center justify-center h-screen bg-red-500 w-full relative">
        <h1 className="section-heading text-zinc-900 font-bold text-7xl">Hello</h1>

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