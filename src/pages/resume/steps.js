import { Container, Spacer, Button, Box, Divider, Progress } from "@chakra-ui/react"
import { useEffect, useState, useContext } from "react"
import { useRouter } from "next/router"
import { LoadingPage } from "../../components/shared/Loading"
import UserDataContext from "../../context/userData"
import Meta from "../../components/partials/seo-meta"
import { Formik } from "formik"
import { handleValidationSchema } from "../../utils/validationSchema"

// the step that the user go through ot fill his detail info for his resume
import NameStep from "../../components/steps/NameStep"
import ContactStep from "../../components/steps/ContactStep"
import LanguagesStep from "../../components/steps/LanguagesStep"

export default function Steps() {
   // initial user data
   // used on formik initialValues
   const { userData } = useContext(UserDataContext)

   // tabs to change hte value of progress bar
   // setActiveTab is in avery components that rander
   const [activeTab, setActiveTab] = useState(0)

   // useEffect and use State return loading
   // if components is not mountet yet
   // state to load
   // true if loading to return loading page
   const [load, setLoad] = useState(true)
   // set loading page after the components is mount
   useEffect(() => setLoad(false), [])

   // get the query to change the step to render
   // the router query
   // return the query from the url
   const { query } = useRouter()

   // variable step to render
   // set the default step to render
   // default step is to choose the resume to use
   // nameStep default is temporary
   let StepToRender = NameStep

   // Switch statement to change the stepe to render
   // width the default case to be the name step for now
   // with the key is query from url
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

   // return loading page if the components is not mounted
   // controled by useState and useEffect
   // load default is true
   // after mount load is set to false by useEffect
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
               {(formikProps) => <StepToRender setActiveTab={setActiveTab} formikProps={formikProps} />}
            </Formik>
         </Container>
      </>
   )
}
