import { Container, Spacer, Button, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import Stepper from "../components/shared/Stepper"
import { LoadingPage } from "../components/shared/Loading"

const NameStep = dynamic(() => import("../components/steps/NameStep"))
const ContactStep = dynamic(() => import("../components/steps/ContactStep"))
const LanguagesStep = dynamic(() => import("../components/steps/LanguagesStep"))

export default function Steps() {
   const [userData, setUserData] = useState({ firstName: "", lastName: "", job: "", avatar: "", about: "" })
   const [activeTab, setActiveTab] = useState(1)
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
         <Box mb="20"></Box>

         <Container maxWidth="container.lg">
            <Stepper active={activeTab} />

            <StepToRender setActiveTab={setActiveTab} setUserData={setUserData} userData={userData} />
         </Container>
      </>
   )
}
