import { useEffect, useState } from "react"
import Link from "next/link"
import {
   Heading,
   Container,
   FormControl,
   FormLabel,
   FormErrorMessage,
   FormHelperText,
   Form,
   Textarea,
   Input,
   Box,
   HStack,
   Button,
   Spacer,
   InputLeftElement,
   InputGroup,
   Icon,
   InputRightElement,
   IconButton,
   Slider,
   SliderTrack,
   SliderFilledTrack,
   SliderThumb,
   Stack,
} from "@chakra-ui/react"
import { IoIosMail, IoIosAddCircle, IoMdAddCircleOutline, IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import AddLanguageModal from "../shared/AddLanguageModal"
import ButtonsSteps from "./ButtonsSteps"

export default function LanguagesStep({ setActiveTab, userData, setUserData }) {
   const [lang, setLang] = useState({ name: "", eval: 50 })

   useEffect(() => setActiveTab(2), [])

   const addLanguage = () => {
      setUserData({ ...userData, languages: [...userData.languages, lang] })
   }

   return (
      <>
         <Container maxW="lg" p={[0, ".5rem"]} my="1rem">
            <Stack direction="row" align="center">
               <Heading fontSize={["1.3rem", "1.6rem"]}>Add a Language</Heading>
               <Spacer />
               <AddLanguageModal lang={lang} addLanguage={addLanguage} setLang={setLang} />
            </Stack>

            {/* BUTTON ------------------------------------------------------------------- */}
            <HStack mt="1rem">
               <ButtonsSteps step="Contact" type="back">
                  Go Back
               </ButtonsSteps>

               <Spacer />

               {/* <Link href={{ pathname: "/resume/steps", query: { step: "Languages" } }}>
                  <Button rightIcon={<IoIosArrowForward />}>Next</Button>
               </Link> */}
            </HStack>
         </Container>
      </>
   )
}
