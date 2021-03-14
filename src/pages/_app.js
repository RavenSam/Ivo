import { ChakraProvider } from "@chakra-ui/react"
import NextNprogress from "nextjs-progressbar"
import { theme } from "../themes"
import DefaultLayout from "../layouts/DefaultLayout"
import { UserDataProvider } from "../context/userData"

import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
   const Layout = Component.Layout ? Component.Layout : DefaultLayout

   return (
      <ChakraProvider theme={theme}>
         <NextNprogress color={theme.colors.primary[400]} height="3" startPosition={0.3} stopDelayMs={200} />

         <UserDataProvider>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </UserDataProvider>
      </ChakraProvider>
   )
}
