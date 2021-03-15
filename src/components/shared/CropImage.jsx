import { useState } from "react"
import { Button, Image, useToast } from "@chakra-ui/react"

export default function CropImage({ imgSrc }) {
   return (
      <>
         <Image
            src={imgSrc}
            alt="Preview Image"
            htmlHeight="130px"
            htmlWidth="130px"
            borderRadius="full"
            boxSize="130px"
         />
      </>
   )
}
