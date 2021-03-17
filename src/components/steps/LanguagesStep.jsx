import { useEffect, useState } from "react"
import { Heading, Container, HStack, VStack, Spacer, Icon, IconButton, Divider, Text, Flex } from "@chakra-ui/react"
import AddLanguageModal from "../shared/AddLanguageModal"
import ButtonsSteps from "./ButtonsSteps"
import { RiStarSFill, RiStarSLine } from "react-icons/ri"
import { BsTrash } from "react-icons/bs"
import Rating from "react-rating"

export default function LanguagesStep({ setActiveTab, formikProps }) {
   // set the tab we are in
   // to change the progress bar
   useEffect(() => setActiveTab(2), [])
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

   return (
      <>
         <Container maxW="lg" p={[0, ".5rem"]} my="1rem">
            <HStack>
               <Heading fontSize={["1.3rem", "1.6rem"]}>Add a Language</Heading>
               <Spacer />
               <AddLanguageModal languages={values.languages} lang={lang} addLanguage={addLanguage} setLang={setLang} />
            </HStack>

            <Divider my="1.5rem" />

            <VStack mb="1rem">
               {values.languages.map((language) => (
                  <Flex key={language.name} w="100%" p="1rem " borderRadius="lg" boxShadow="s8" align="center">
                     <Text as="strong" w="25%">
                        {language.name}
                     </Text>

                     <Spacer />

                     <Rating
                        readonly
                        initialRating={language.eval / 10}
                        step={2}
                        stop={10}
                        emptySymbol={<Icon as={RiStarSLine} boxSize={["1.3rem", "1.5rem"]} />}
                        fullSymbol={<Icon as={RiStarSFill} boxSize={["1.3rem", "1.5rem"]} />}
                     />

                     <Spacer />

                     <IconButton
                        size={["sm", "md"]}
                        onClick={() => handleDelete(language.name)}
                        aria-label="Delete Language"
                        variant="ghost"
                        color="#ff006a"
                        icon={<Icon as={BsTrash} boxSize="1.5rem" />}
                     />
                  </Flex>
               ))}
            </VStack>

            {/* BUTTON ------------------------------------------------------------------- */}
            <HStack mt="1rem">
               <ButtonsSteps step="Contact" type="back">
                  Go Back
               </ButtonsSteps>

               <Spacer />
            </HStack>
         </Container>
      </>
   )
}
