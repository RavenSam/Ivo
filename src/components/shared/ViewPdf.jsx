import {
   Heading,
   Container,
   Box,
   Menu,
   MenuButton,
   Text,
   Button,
   Center,
   HStack,
   MenuList,
   MenuGroup,
   MenuItem,
   Input,
   Spacer,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import jsPDF from "jspdf"
import saveAs from "../../utils/saveAs"
import { LoadingPage } from "./Loading"

import { toPng } from "html-to-image"


// Resume
import { R_1 } from "../../cvs/R_1"
import R1 from "../../cvs/R_1"

export default function Confirmation({ userData }) {
   const [loading, setLoading] = useState(false)

   const [colors, setColors] = useState(R1.style.colors)
   const [primaryColor, setPrimaryColor] = useState("#1d1cc7")
   const [secondaryColor, setSecondaryColor] = useState("#b51a89")

   const savePdf = async () => {
      const node = document.querySelector("#capture")
      setLoading(true)

      try {
         const dataUrl = await toPng(node)
         const pdf = new jsPDF()
         pdf.addImage(dataUrl, "JPEG", 0, 0)
         pdf.save(`${userData.firstName} ${userData.lastName} resume.pdf`)
         setLoading(false)
      } catch (err) {
         setLoading(false)
         console.error("oops, something went wrong!", err)
      }
   }

   const savePng = async () => {
      const node = document.querySelector("#capture")
      setLoading(true)

      try {
         const dataUrl = await toPng(node)
         saveAs(dataUrl, `${userData.firstName} ${userData.lastName} resume.png`)
         setLoading(false)
      } catch (err) {
         setLoading(false)
         console.error("oops, something went wrong!", err)
      }
   }

   if (!userData) return <LoadingPage />

   const Resume = userData.resume

   const userStyle = { primaryColor, secondaryColor }

   return (
      <>
         <Container maxW="21cm" p="0">
            <HStack spacing={2} my="1rem" p="0 1rem">
               <Menu>
                  <MenuButton isLoading={loading} as={Button}>
                     Download
                  </MenuButton>

                  <MenuList>
                     <MenuGroup title="Download as">
                        <MenuItem onClick={savePng}>PNG</MenuItem>
                        <MenuItem onClick={savePdf}>PDF</MenuItem>
                     </MenuGroup>
                  </MenuList>
               </Menu>

               <Spacer />

               <Input
                  type="color"
                  width="30px"
                  height="30px"
                  borderRadius="full"
                  variant="unstyled"
                  overflow="hidden"
                  value={colors.colorBg1}
                  onChange={(e) => setColors({...colors,colorBg1:e.target.value})}
               />

               <Input
                  type="color"
                  width="30px"
                  height="30px"
                  borderRadius="full"
                  variant="unstyled"
                  overflow="hidden"
                  value={colors.colorBg2}
                  onChange={(e) => setColors({...colors,colorBg2:e.target.value})}
               />
            </HStack>

            <Resume userData={userData} userStyle={userStyle} />
         </Container>
      </>
   )
}
