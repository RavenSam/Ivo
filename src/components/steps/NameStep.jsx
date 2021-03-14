import { useEffect } from "react"
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
} from "@chakra-ui/react"
import { IoIosArrowForward } from "react-icons/io"
import DropHere from "../shared/DropHere"

export default function NameStep({ setActiveTab, handleChange }) {
   useEffect(() => setActiveTab(0), [])

   return (
      <>
         <Container maxW="500px" p={[0, ".5rem"]} my="1rem">
            {/* AVATAR ------------------------------------------------------------------- */}
            <FormControl id="avatar" my=".8rem">
               <FormLabel htmlFor="avatar">Avatar</FormLabel>

               <DropHere />
            </FormControl>

            {/* FIRST NAME ------------------------------------------------------------------- */}
            <FormControl id="firstName" my=".8rem">
               <FormLabel htmlFor="firstName">First Name</FormLabel>
               <Input type="text" placeholder="John" id="firstName" name="firstName" onChange={handleChange} />
            </FormControl>

            {/* LAST NAME ------------------------------------------------------------------- */}
            <FormControl id="lastName" my=".8rem">
               <FormLabel htmlFor="lastName">Last Name</FormLabel>
               <Input type="text" placeholder="Doe" id="lastName" name="lastName" onChange={handleChange} />
            </FormControl>

            {/* JOB ------------------------------------------------------------------- */}
            <FormControl id="job" my=".8rem">
               <FormLabel htmlFor="job">Job</FormLabel>
               <Input type="text" placeholder="Web Designer" id="job" name="job" onChange={handleChange} />
            </FormControl>

            {/* ABOUT ------------------------------------------------------------------- */}
            <FormControl id="about" my=".8rem">
               <FormLabel htmlFor="about">About</FormLabel>
               <Textarea
                  size="sm"
                  type="text"
                  id="about"
                  name="about"
                  placeholder="Tell us something about you"
                  onChange={handleChange}
               />
            </FormControl>

            {/* BUTTON ------------------------------------------------------------------- */}
            <HStack mt="1rem">
               <Spacer />

               <Link href={{ pathname: "/resume/steps", query: { step: "Contact" } }}>
                  <Button rightIcon={<IoIosArrowForward />}>Next</Button>
               </Link>
            </HStack>
         </Container>
      </>
   )
}
