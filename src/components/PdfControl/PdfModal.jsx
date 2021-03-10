import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   useDisclosure,
   Button,
} from "@chakra-ui/react"
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"

export default function PdfModal({ PdfComponent }) {
   const { isOpen, onOpen, onClose } = useDisclosure()

   return (
      <>
         <Button onClick={onOpen}>Open Modal</Button>

         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Modal Title</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  {PdfComponent && (
                     <PDFViewer style={{ height: "60vh", width: "100%" }}>
                        <PdfComponent />
                     </PDFViewer>
                  )}
               </ModalBody>

               <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                     Close
                  </Button>

                  {PdfComponent && (
                     <PDFDownloadLink document={<PdfComponent />} fileName="resume.pdf">
                        {({ blob, url, loading, error }) => (
                           <Button isLoading={loading} variant="solid">
                              Download Pdf
                           </Button>
                        )}
                     </PDFDownloadLink>
                  )}
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   )
}
