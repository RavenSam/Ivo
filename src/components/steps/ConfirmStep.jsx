import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Container, HStack, Spacer } from "@chakra-ui/react"
import ButtonsSteps from "./ButtonsSteps"
import ViewPdf from "../shared/ViewPdf"
import LoadingPage from "../shared/Loading"

export default function ConfirmStep({ setActiveTab, formikProps }) {
   // set the tab we are in
   // to change the progress bar
   useEffect(() => setActiveTab(4), [])
   // true if loading to return loading page
   const [load, setLoad] = useState(true)
   // set loading page after the components is mount
   useEffect(() => setLoad(false), [])

   // Init Router
   const router = useRouter()

   // formik state
   // Formik from value object (firstName,lastName....)
   // Formik setValues to change the values
   const { values, errors } = formikProps
   const { avatar, resume, style, languages } = values

   // Formik Errors
   const { firstName, lastName, job, about, email, phone, website } = errors

   // Check if there is an empty field
   // if there is redirect
   if (!resume || !style) {
      router.push({ href: "/resume/step", query: { step: "Chose Resume" } })
   } else if (!avatar.length || firstName || lastName || job || about) {
      router.push({ href: "/resume/step", query: { step: "Name" } })
   } else if (email || phone) {
      router.push({ href: "/resume/step", query: { step: "Contact" } })
   } else if (!languages.length) {
      router.push({ href: "/resume/step", query: { step: "Languages" } })
   }

   // after mount load is set to false by useEffect
   if (load) return <LoadingPage />

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
