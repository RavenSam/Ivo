import { useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import {
   Drawer,
   DrawerBody,
   DrawerFooter,
   DrawerHeader,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   useDisclosure,
   VStack,
   Button,
   IconButton,
   Icon,
   Divider,
} from "@chakra-ui/react"

import { navLinks } from "../../config/links"

import { CgMenuRight } from "react-icons/cg"
import NavButton from "./NavButton"

export default function SimpleDrawer() {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = useRef()

   const path = useRouter().pathname

   return (
      <>
         <IconButton ref={btnRef} onClick={onOpen} variant="ghost" icon={<Icon as={CgMenuRight} boxSize="1.5rem" />} />

         <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay>
               <DrawerContent>
                  <DrawerCloseButton />

                  <DrawerHeader>Navigate To</DrawerHeader>

                  <DrawerBody>
                     <VStack>
                        <Divider mb="1.2rem" />
                        {navLinks.map((link) => (
                           <Link key={link.name} href={link.href}>
                              <a style={{ width: "100%" }}>
                                 <Button
                                    textTransform="capitalize"
                                    isActive={link.href === path}
                                    variant="ghost"
                                    w="100%"
                                 >
                                    {link.name}
                                 </Button>
                              </a>
                           </Link>
                        ))}
                     </VStack>
                  </DrawerBody>

                  <DrawerFooter>
                     <NavButton />
                  </DrawerFooter>
               </DrawerContent>
            </DrawerOverlay>
         </Drawer>
      </>
   )
}
