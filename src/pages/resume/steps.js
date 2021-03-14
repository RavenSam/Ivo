import { Container, Spacer, Button, Box, Divider, Progress } from "@chakra-ui/react"
import { useEffect, useState, useContext } from "react"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { LoadingPage } from "../../components/shared/Loading"
import UserDataContext from "../../context/userData"

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
