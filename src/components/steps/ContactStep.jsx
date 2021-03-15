import { useEffect, useState } from "react"
import Link from "next/link"
import {
   Heading,
   Container,
   FormControl,
   FormLabel,
   FormErrorMessage,
   FormHelperText,
   Form,
   Textarea,
   Input,
   Box,
   HStack,
   Button,
   Spacer,
   InputLeftElement,
   InputGroup,
   Icon,
} from "@chakra-ui/react"
import ButtonsSteps from "./ButtonsSteps"
import { IoIosMail, IoIosPhonePortrait, IoMdGlobe, IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

export default function ContactStep({ setActiveTab, handleChange }) {
   useEffect(() => setActiveTab(1), [])

   return (
      <>
         <Container maxW="500px" p={[0, ".5rem"]} my="1rem">
            {/* EMAIL ADDRESS ------------------------------------------------------------------- */}
            <FormControl id="email" my=".8rem">
               <FormLabel htmlFor="email">Email Address</FormLabel>
               <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<Icon as={IoIosMail} boxSize="1.5rem" />} />
                  <Input type="email" placeholder="johndoe@gmail.com" id="email" name="email" onChange={handleChange} />
               </InputGroup>
            </FormControl>

            {/* PHONE NUMBER ------------------------------------------------------------------- */}
            <FormControl id="phone" my=".8rem">
               <FormLabel htmlFor="phone">Phone Number</FormLabel>
               <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<Icon as={IoIosPhonePortrait} boxSize="1.5rem" />} />
                  <Input type="number" placeholder="+123 456 678" id="phone" name="phone" onChange={handleChange} />
               </InputGroup>
            </FormControl>

            {/* WEBSITE ------------------------------------------------------------------- */}
            <FormControl id="site" my=".8rem">
               <FormLabel htmlFor="site">Website</FormLabel>
               <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<Icon as={IoMdGlobe} boxSize="1.5rem" />} />
                  <Input type="text" placeholder="www.johndoe.com" id="site" name="site" onChange={handleChange} />
               </InputGroup>
            </FormControl>

            {/* BUTTON ------------------------------------------------------------------- */}
            <HStack mt="1rem">
               <ButtonsSteps step="Name" type="back">
                  Go Back
               </ButtonsSteps>

               <Spacer />

               <ButtonsSteps step="Languages">Next</ButtonsSteps>
            </HStack>
         </Container>
      </>
   )
}
