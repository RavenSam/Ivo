import { Heading, Container, Box, Grid, GridItem, Text, Button, Center, HStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import ReactDOMServer from "react-dom/server"
import saveAs from "../../utils/saveAs"
import { LoadingPage } from "./Loading"

// Resume
import { R_1 } from "../../cvs/R_1"

export default function DownloadAll({ userData = {} }) {
   const [loading, setLoading] = useState(false)
   const [dataUrl, setDataUrl] = useState("")

   useEffect(async () => {
      try {
         setLoading(true)
         const canvas = await html2canvas(document.querySelector("#capture"))
         const imgData = canvas.toDataURL("image/png")
         setLoading(false)
         setDataUrl(imgData)
      } catch (err) {
         setLoading(false)
         console.log(err)
      }
   }, [])

   const savePdf = () => {
      const pdf = new jsPDF()
      pdf.addImage(dataUrl, "JPEG", 0, 0)
      pdf.save("download.pdf")
   }

   const savePng = () => saveAs(dataUrl, "download.png")

   const open = () => {
      let w = window.open("about:blank")
      let image = new Image()
      image.src = dataUrl
      setTimeout(function () {
         w.document.write(image.outerHTML)
      }, 0)
   }

   if (loading) return <LoadingPage />

   const Resume = userData.resume

   return (
      <>
         <HStack spacing={2} maxW="container.md" my="1rem">
            <Button onClick={savePng}>Save PNG</Button>

            <Button onClick={savePdf}>Save PDF</Button>

            <Button onClick={open}>View</Button>
         </HStack>

         <Resume userData={userData} />
      </>
   )
}
