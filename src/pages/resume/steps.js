import { Container, Spacer, Button, Box, Divider, Progress } from "@chakra-ui/react"
import { useEffect, useState, useContext } from "react"
import { useRouter } from "next/router"
import { LoadingPage } from "../../components/shared/Loading"
import UserDataContext from "../../context/userData"
import Meta from "../../components/partials/seo-meta"
import { Formik } from "formik"
import * as Yup from "yup"

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

   const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
   const URL = /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i

   const handleValidationSchema = Yup.object().shape({
      firstName: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
      lastName: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
      job: Yup.string().min(3, "Too Short!").max(20, "Too Long!").required("Required"),
      about: Yup.string().min(20, "Too Short!").max(100, "Too Long!").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().matches(phoneRegex, "Invalid phone").required("Phone is required"),
      website: Yup.string().matches(URL, "Enter a valid url"),
   })

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
