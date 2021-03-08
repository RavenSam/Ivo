import { ChakraProvider } from "@chakra-ui/react"
import NextNprogress from "nextjs-progressbar"
// import NProgress from "nprogress"
import { theme } from "../themes"
import DefaultLayout from "../layouts/DefaultLayout"

import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
   const Layout = Component.Layout ? Component.Layout : DefaultLayout

   // NProgress.configure({ showSpinner: false })

   return (
      <ChakraProvider theme={theme}>
         <NextNprogress color="#198" height="3" startPosition={0.3} stopDelayMs={200} />

         <Layout>
            <Component {...pageProps} />
         </Layout>
      </ChakraProvider>
   )
}
