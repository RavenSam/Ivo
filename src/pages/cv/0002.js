import CV from "../../components/cv/0002/TestOne"
import dynamic from "next/dynamic"

const PdfPage = dynamic(() => import("../../components/shared/PdfPage"), { ssr: false })
const PdfModal = dynamic(() => import("../../components/shared/PdfModal"), { ssr: false })

export default function Cv0002() {
   return (
      <>
         <PdfPage PdfComponent={CV} />
      </>
   )
}
