import { Container, Spacer, Button, Box, Divider, Progress } from "@chakra-ui/react"
import { useEffect, useState, useContext } from "react"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { LoadingPage } from "../../components/shared/Loading"
import UserDataContext from "../../context/userData"
import Meta from "../../components/partials/seo-meta"
import { Formik } from "formik"

const NameStep = dynamic(() => import("../../components/steps/NameStep"))
const ContactStep = dynamic(() => import("../../components/steps/ContactStep"))
const LanguagesStep = dynamic(() => import("../../components/steps/LanguagesStep"))

export default function Steps() {
   const { userData, setUserData, handleChange } = useContext(UserDataContext)

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

            <StepToRender
               setActiveTab={setActiveTab}
               handleChange={handleChange}
               userData={userData}
               setUserData={setUserData}
            />
         </Container>
      </>
   )
}
