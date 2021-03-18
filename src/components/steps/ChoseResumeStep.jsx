import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import {
   Heading,
   Container,
   HStack,
   VStack,
   Spacer,
   Icon,
   IconButton,
   Divider,
   Text,
   Flex,
   Img,
   SimpleGrid,
   Box,
} from "@chakra-ui/react"

import * as resumes from "../../resumes"

export default function ChoseResumeStep({ setActiveTab, formikProps }) {
   // set the tab we are in
   // to change the progress bar
   useEffect(() => setActiveTab(0), [])

   //    Init the router
   const router = useRouter()

   // formik state
   // Formik from value object (firstName,lastName....)
   // Formik setValues to change the values
   const { values, setValues } = formikProps

   // Function on resume image
   // select the resume and go to the next step
   //    Save the resume on formik state
   const handleNext = (resume, style) => {
      router.push({ href: "/resume/step", query: { step: "Name" } })
      setValues({ ...values, resume, style })
   }

   return (
      <>
         <Heading as="h1" mb="3rem">
            Chose your resume
         </Heading>

         <SimpleGrid columns={[1, 2, 3]} spacing={6} my="2rem">
            {resumes.default.map((el, i) => (
               <Box
                  cursor="pointer"
                  key={i}
                  borderRadius="10px"
                  overflow="hidden"
                  boxShadow="s3"
                  onClick={() => handleNext(el.resume, el.style)}
               >
                  <Img src={el.thumbnail} />
               </Box>
            ))}
         </SimpleGrid>
      </>
   )
}
