import { useEffect, useState } from "react"
import { Heading, Container, HStack, Spacer, Divider } from "@chakra-ui/react"
import AddLanguageModal from "../shared/AddLanguageModal"
import ButtonsSteps from "./ButtonsSteps"
import Language from "../shared/Language"

export default function LanguagesStep({ setActiveTab, formikProps }) {
   // set the tab we are in
   // to change the progress bar
   useEffect(() => setActiveTab(3), [])
   // state to change the input of language
   // default language input values { name: "", eval: 50 }
   const [lang, setLang] = useState({ name: "", eval: 50 })

   // formik state
   // Formik from value object (firstName,lastName....)
   // Formik setValues to change the values
   const { values, setValues } = formikProps

   // Set Language With Formik
   // add language to formik values languages array
   const addLanguage = () => setValues({ ...values, languages: [...values.languages, lang] })

   // function for the delete button
   // delete a language by name from formik values languages array
   const handleDelete = (langName) => {
      // filter the formik language
      // return a new array without a language with name langName
      const newLanguages = values.languages.filter((lan) => lan.name !== langName)
      // set formik state languages new value
      setValues({ ...values, languages: newLanguages })
   }

   // return true if the language array is empty
   // Disable the next button if return true
   let isDisabled = !values.languages.length ? true : false

   return (
      <>
         <Container maxW="500px" p={[0, ".5rem"]} my="1rem">
            <HStack>
               <Heading fontSize={["1.3rem", "1.6rem"]}>Add a Language</Heading>
               <Spacer />
               <AddLanguageModal languages={values.languages} lang={lang} addLanguage={addLanguage} setLang={setLang} />
            </HStack>

            <Divider my="1.5rem" />

            <Language languages={values.languages} handleDelete={handleDelete} />

            {/* BUTTON ------------------------------------------------------------------- */}
            <HStack mt="1rem">
               <ButtonsSteps step="Contact" type="back">
                  Go Back
               </ButtonsSteps>

               <Spacer />

               <ButtonsSteps step="Confirm" btnOptions={{ isDisabled }}>
                  Next
               </ButtonsSteps>
            </HStack>
         </Container>
      </>
   )
}
