import {
   FormControl,
   FormLabel,
   Input,
   Button,
   Icon,
   Slider,
   SliderTrack,
   SliderFilledTrack,
   SliderThumb,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   useDisclosure,
   FormErrorMessage,
} from "@chakra-ui/react"
import { IoAddCircle } from "react-icons/io5"

export default function AddLanguageModal({ addLanguage, lang, setLang, languages }) {
   const { isOpen, onOpen, onClose } = useDisclosure()

   // Input language name
   // handle the input onChange
   const handleLang = (e) => setLang({ ...lang, name: e.target.value })
   // input slide of language evaluation
   // handle the input change
   const handleEval = (e) => setLang({ ...lang, eval: e })

   // Cancel Button
   // Close the modal
   // set the input to default value
   const handleCancel = () => {
      onClose()
      setLang({ name: "", eval: 50 })
   }

   // Added Button onClick
   // Add language to the Values
   // Close the Modal
   // Set the input to default value
   const handleAdd = () => {
      addLanguage()
      onClose()
      setLang({ name: "", eval: 50 })
   }

   // If Language Is Already IN languages
   // Return True If it Exists
   // if exist set the input to invalid and
   // disable the add button
   const alreadyExist = languages.find((el) => el.name.toLowerCase() === lang.name.toLowerCase()) ? true : false

   return (
      <>
         <Button leftIcon={<Icon as={IoAddCircle} boxSize="1.5rem" />} onClick={onOpen}>
            Add
         </Button>

         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Add a Language</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  {/* LANGUAGES------------------------------------------------------------------- */}
                  <FormControl id="language" mb="1.5rem" isInvalid={alreadyExist}>
                     <FormLabel>Language</FormLabel>
                     <Input type="text" placeholder="English" name="language" value={lang.name} onChange={handleLang} />
                     <FormErrorMessage>Language Already Selected</FormErrorMessage>
                  </FormControl>

                  {/* NOTE ------------------------------------------------------------------- */}
                  <FormControl id="language">
                     <FormLabel>How good you are? {lang.eval / 10}/10 </FormLabel>
                     <Slider
                        name="eval"
                        aria-label="language evaluation"
                        colorScheme="primary"
                        onChange={handleEval}
                        defaultValue={lang.eval}
                     >
                        <SliderTrack>
                           <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                     </Slider>
                  </FormControl>
               </ModalBody>

               <ModalFooter>
                  <Button mr={3} onClick={handleCancel}>
                     Cancel
                  </Button>
                  <Button onClick={handleAdd} isDisabled={!lang.name.length || alreadyExist}>
                     Add
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   )
}
