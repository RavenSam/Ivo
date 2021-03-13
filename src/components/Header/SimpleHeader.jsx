import Link from "next/link"
import { useRouter } from "next/router"

import { HStack, Heading, Container, Spacer, Button, Box } from "@chakra-ui/react"

import { navLinks } from "../../config/links"

import SimpleDrawer from "./SimpleDrawer"
import NavButton from "./NavButton"

export default function SimpleHeader() {
   const path = useRouter().pathname

   return (
      <>
         <Box w="100%" py="4" boxShadow="lg">
            <Container maxW="container.lg">
               <HStack>
                  <Heading>LOGO</Heading>

                  <Spacer />

                  <HStack spacing="1" d={["none", null, "flex"]}>
                     {navLinks.map((link) => (
                        <Link key={link.name} href={link.href}>
                           <a>
                              <Button isActive={link.href === path} variant="nav">
                                 {link.name}
                              </Button>
                           </a>
                        </Link>
                     ))}

                     <NavButton />
                  </HStack>

                  <Box d={["block", null, "none"]}>
                     <SimpleDrawer />
                  </Box>
               </HStack>
            </Container>
         </Box>
      </>
   )
}
