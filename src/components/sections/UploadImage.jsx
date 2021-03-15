import { useState } from "react"

import DropHere from "../shared/DropHere"
import CropImage from "../shared/CropImage"

export default function UploadImage() {
   const [imgSrc, setImgSrc] = useState(null)

   return (
      <>
         {imgSrc ? (
            <>
               <CropImage imgSrc={imgSrc} />
            </>
         ) : (
            <DropHere imgSrc={imgSrc} setImgSrc={setImgSrc} />
         )}
      </>
   )
}
