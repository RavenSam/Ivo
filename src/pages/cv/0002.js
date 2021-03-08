import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"
import CV from "../../components/cv/0002/TestOne"
import { useEffect, useState } from "react"
import { Heading } from "@chakra-ui/react"

export default function Cv0002() {
   const [rendered, setRendered] = useState(false)

   useEffect(() => setRendered(true), [])

   if (!rendered) return <Heading>Loading...</Heading>

   return (
      <>
         <PDFViewer>
            <CV />
         </PDFViewer>

         <PDFDownloadLink
            document={<CV />}
            fileName="movielist.pdf"
            style={{
               textDecoration: "none",
               padding: "10px",
               color: "#4a4a4a",
               backgroundColor: "#f2f2f2",
               border: "1px solid #4a4a4a",
            }}
         >
            {({ blob, url, loading, error }) => (loading ? "Loading document..." : "Download Pdf")}
         </PDFDownloadLink>
      </>
   )
}
