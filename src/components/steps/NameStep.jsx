import { useEffect } from "react"

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
} from "@chakra-ui/react"
import UploadImage from "../sections/UploadImage"
import ButtonsSteps from "./ButtonsSteps"

export default function NameStep({ setActiveTab, handleChange }) {
   useEffect(() => setActiveTab(0), [])

   return (
      <>
         <Container maxW="500px" p={[0, ".5rem"]} my="1rem">
            {/* AVATAR ------------------------------------------------------------------- */}
            <FormControl id="avatar" my=".8rem">
               <FormLabel htmlFor="avatar">Avatar</FormLabel>

               <UploadImage />
            </FormControl>

            {/* FIRST NAME ------------------------------------------------------------------- */}
            <FormControl id="firstName" my=".8rem" isInvalid={true}>
               <FormLabel htmlFor="firstName">First Name</FormLabel>
               <Input type="text" placeholder="John" id="firstName" name="firstName" onChange={handleChange} />
               <FormErrorMessage>Error</FormErrorMessage>
            </FormControl>

            {/* LAST NAME ------------------------------------------------------------------- */}
            <FormControl id="lastName" my=".8rem" isInvalid={false}>
               <FormLabel htmlFor="lastName">Last Name</FormLabel>
               <Input type="text" placeholder="Doe" id="lastName" name="lastName" onChange={handleChange} />
               <FormErrorMessage>Error</FormErrorMessage>
            </FormControl>

            {/* JOB ------------------------------------------------------------------- */}
            <FormControl id="job" my=".8rem" isInvalid={false}>
               <FormLabel htmlFor="job">Job</FormLabel>
               <Input type="text" placeholder="Web Designer" id="job" name="job" onChange={handleChange} />
               <FormErrorMessage>Error</FormErrorMessage>
            </FormControl>

            {/* ABOUT ------------------------------------------------------------------- */}
            <FormControl id="about" my=".8rem" isInvalid={false}>
               <FormLabel htmlFor="about">About</FormLabel>
               <Textarea
                  size="sm"
                  type="text"
                  id="about"
                  name="about"
                  placeholder="Tell us something about you"
                  onChange={handleChange}
               />
               <FormErrorMessage>Error</FormErrorMessage>
            </FormControl>

            {/* BUTTON ------------------------------------------------------------------- */}
            <HStack mt="1rem">
               <Spacer />

               <ButtonsSteps step="Contact">Next</ButtonsSteps>
            </HStack>
         </Container>
      </>
   )
}
