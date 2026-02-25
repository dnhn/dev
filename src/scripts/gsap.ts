import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(DrawSVGPlugin, ScrollSmoother, ScrollTrigger, SplitText)

export const smoother = ScrollSmoother.create({
  wrapper: 'body main',
  content: 'body main .smooth-content',
  effects: true,
  normalizeScroll: true,
  ignoreMobileResize: true,
})
