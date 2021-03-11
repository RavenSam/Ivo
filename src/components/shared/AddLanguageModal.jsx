import {
   FormControl,
   FormLabel,
   Input,
   Button,
   Icon,
   IconButton,
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
} from "@chakra-ui/react"
import { IoMdAddCircleOutline } from "react-icons/io"
import { useEffect, useState } from "react"

export default function AddLanguageModal({ addLanguage, lang, setLang }) {
   const { isOpen, onOpen, onClose } = useDisclosure()

   const handleLang = (e) => setLang({ ...lang, name: e.target.value })
   const handleEval = (e) => setLang({ ...lang, eval: e })

   return (
      <>
         <IconButton
            borderRadius="full"
            aria-label="Search database"
            onClick={onOpen}
            icon={<Icon as={IoMdAddCircleOutline} boxSize="1.5rem" />}
         />

         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Add a Language</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  {/* LANGUAGES------------------------------------------------------------------- */}
                  <FormControl id="language" mb="1.5rem">
                     <FormLabel>Language</FormLabel>
                     <Input type="text" placeholder="English" name="language" onChange={handleLang} />
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
                  <Button mr={3} onClick={onClose}>
                     Cancel
                  </Button>
                  <Button onClick={addLanguage} onClick={onClose}>
                     Add
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   )
}
