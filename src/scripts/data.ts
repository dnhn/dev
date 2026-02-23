import type { ImageMetadata } from 'astro'
import ImgSpendful from '@/assets/spendful.png'
import ImgLF from '@/assets/lfapp.png'
import ImgWager from '@/assets/wager.png'
import ImgGF from '@/assets/gfood.png'
import ImgDanskOff from '@/assets/danskoff.png'
import ImgFMuseum from '@/assets/fmuseum.png'
import ImgImg5 from '@/assets/img5.png'

export const WORKS: {
  title: string
  image: ImageMetadata
  links: { label?: string; url: string }[]
}[] = [
  {
    title: 'Spendful',
    image: ImgSpendful,
    links: [
      { label: 'iOS', url: 'https://apps.apple.com/app/id6757114071' },
    ],
  },
  {
    title: 'LongF',
    image: ImgLF,
    links: [
      { label: 'Android', url: 'https://play.google.com/store/apps/details?id=com.vietlong.longf' },
      { label: 'iOS', url: 'https://apps.apple.com/app/id6751319696' },
    ],
  },
  {
    title: 'Wager API',
    image: ImgWager,
    links: [
      { url: 'https://wagerapi.com' },
    ],
  },
  {
    title: 'GrabFood',
    image: ImgGF,
    links: [
      { url: 'https://food.grab.com' },
    ],
  },
  {
    title: 'Dansk Offshore',
    image: ImgDanskOff,
    links: [
      { url: 'https://danskoffshore.dk' },
    ],
  },
  {
    title: 'Frederiksberg Museerne',
    image: ImgFMuseum,
    links: [
      { url: 'https://frederiksbergmuseerne.dk' },
    ],
  },
  {
    title: 'Imagine5',
    image: ImgImg5,
    links: [
      { url: 'https://imagine5.com' },
    ],
  },
]

export const SKILLS = [
  { name: "AWS", url: 'https://aws.amazon.com' },
  { name: "Astro", url: 'https://astro.build' },
  { name: "CSS", url: 'https://w3.org/Style/CSS' },
  { name: "Cloudflare", url: 'https://cloudflare.com' },
  { name: "Expo", url: 'https://expo.io' },
  { name: "Figma", url: 'https://figma.com' },
  { name: "GSAP", url: 'https://gsap.com' },
  { name: "Git", url: 'https://git-scm.com' },
  { name: "HTML", url: 'https://html.spec.whatwg.org/multipage' },
  { name: "JavaScript", url: 'https://ecma-international.org/publications-and-standards/standards/ecma-262' },
  { name: "MUI", url: 'https://mui.com' },
  { name: "Motion", url: 'https://motion.dev' },
  { name: "Netlify", url: 'https://netlify.com' },
  { name: "Next.js", url: 'https://nextjs.org' },
  { name: "Python", url: 'https://python.org' },
  { name: "Radix UI", url: 'https://radix-ui.com' },
  { name: "React Native", url: 'https://reactnative.dev' },
  { name: "React", url: 'https://react.dev' },
  { name: "shadcn/ui", url: 'https://ui.shadcn.com' },
  { name: "Supabase", url: 'https://supabase.com' },
  { name: "Tailwind CSS", url: 'https://tailwindcss.com' },
  { name: "TypeScript", url: 'https://typescriptlang.org' },
  { name: "Vercel", url: 'https://vercel.com' },
  { name: "Vim", url: 'https://www.vim.org' },
  { name: "Visual Studio Code", url: 'https://code.visualstudio.com' },
  { name: "Vite", url: 'https://vite.dev' },
  { name: "WebStorm", url: 'https://jetbrains.com/webstorm' },
]
