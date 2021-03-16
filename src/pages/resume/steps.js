import { Container, Spacer, Button, Box, Divider, Progress } from "@chakra-ui/react"
import { useEffect, useState, useContext } from "react"
import { useRouter } from "next/router"
import { LoadingPage } from "../../components/shared/Loading"
import UserDataContext from "../../context/userData"
import Meta from "../../components/partials/seo-meta"
import { Formik } from "formik"
import { handleValidationSchema } from "../../utils/validationSchema"

import NameStep from "../../components/steps/NameStep"
import ContactStep from "../../components/steps/ContactStep"
import LanguagesStep from "../../components/steps/LanguagesStep"

export default function Steps() {
   const { userData, setUserData } = useContext(UserDataContext)

   const [activeTab, setActiveTab] = useState(0)
   const [load, setLoad] = useState(true)

   useEffect(() => setLoad(false), [])

   const { query } = useRouter()

   let StepToRender = NameStep

   switch (query.step) {
      case "Name":
         StepToRender = NameStep
         break

      case "Contact":
         StepToRender = ContactStep
         break

      case "Languages":
         StepToRender = LanguagesStep
         break

      default:
         StepToRender = NameStep
         break
   }

   if (load) return <LoadingPage />

   return (
      <>
         <Meta
            title="Home Page | Ivo get a free modern resume in 2minutes"
            desc="Create your own CV or resume in 2 minutes, its easy and FREE"
         />

         <Container maxWidth="container.lg" pt="4rem">
            <Progress value={activeTab} max="4" borderRadius="30px" colorScheme="primary" />

            <Divider my="2rem" />

            <Formik
               initialValues={userData}
               validationSchema={handleValidationSchema}
               onSubmit={(values, actions) => console.log({ values, actions })}
            >
               {(formikProps) => (
                  <StepToRender
                     setActiveTab={setActiveTab}
                     userData={userData}
                     setUserData={setUserData}
                     formikProps={formikProps}
                  />
               )}
            </Formik>
         </Container>
      </>
   )
}
