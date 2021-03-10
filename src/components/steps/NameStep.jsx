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
} from "@chakra-ui/react"

export default function NameStep({ setActiveTab, setUserData, userData }) {
   useEffect(() => setActiveTab(0), [])

   const handleChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value })

   return (
      <>
         <Container maxW="500px" p={[0, ".5rem", "1rem"]} my="1rem">
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

            {/* AVATAR ------------------------------------------------------------------- */}
            <FormControl id="avatar" my=".8rem">
               <FormLabel htmlFor="avatar">Avatar</FormLabel>
               <Input type="file" id="avatar" name="avatar" onChange={handleChange} />
            </FormControl>

            {/* AVATAR ------------------------------------------------------------------- */}
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
            <HStack>
               <Spacer />

               <Link href={{ pathname: "/steps", query: { step: "Contact" } }}>
                  <Button>Next</Button>
               </Link>
            </HStack>
         </Container>
      </>
   )
}
