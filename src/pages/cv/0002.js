import CV from "../../components/cv/0002/TestOne"
import dynamic from "next/dynamic"

const PdfPage = dynamic(() => import("../../components/PdfControl/PdfPage"), { ssr: false })
const PdfModal = dynamic(() => import("../../components/PdfControl/PdfModal"), { ssr: false })

export default function Cv0002() {
   return (
      <>
         <PdfPage PdfComponent={CV} />
      </>
   )
}
