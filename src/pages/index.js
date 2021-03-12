import { Heading } from "@chakra-ui/react"
import Meta from "../components/partials/seo-meta"
import SimpleHero from "../components/sections/SimpleHero"


export default function Home() {
   return (
      <>
         <Meta title="Home Page | Ivo" desc="Create your own CV in 2 minutes" />

         <SimpleHero />
      </>
   )
}
