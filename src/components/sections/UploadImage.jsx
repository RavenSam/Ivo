import { useState, useEffect } from "react"

import DropHere from "../shared/DropHere"
import CropImage from "../shared/CropImage"

export default function UploadImage({ setAvatar, avatar }) {
   // const [imgSrc, setImgSrc] = useState(null)

   // useEffect(() => setAvatar(imgSrc), [imgSrc])

   return (
      <>
         {avatar ? (
            <>
               <CropImage imgSrc={avatar} />
            </>
         ) : (
            <DropHere imgSrc={avatar} setImgSrc={setAvatar} />
         )}
      </>
   )
}
