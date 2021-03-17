import { useEffect, useState } from "react"
import { Heading, Container, HStack, VStack, Spacer, Icon, IconButton, Divider, Text, Flex } from "@chakra-ui/react"
import ButtonsSteps from "./ButtonsSteps"
import ViewPdf from "../shared/ViewPdf"

export default function ConfirmStep({ setActiveTab, formikProps }) {
   // set the tab we are in
   // to change the progress bar
   useEffect(() => setActiveTab(3), [])

   // formik state
   // Formik from value object (firstName,lastName....)
   // Formik setValues to change the values
   const { values, setValues } = formikProps

   console.log(values)

   return (
      <>
         <ViewPdf userData={values} />

         <Container maxW="21cm" p="0" my="1rem">
            {/* BUTTON ------------------------------------------------------------------- */}
            <HStack mt="1rem">
               <ButtonsSteps step="Languages" type="back">
                  Go Back
               </ButtonsSteps>

               <Spacer />
            </HStack>
         </Container>
      </>
   )
}
