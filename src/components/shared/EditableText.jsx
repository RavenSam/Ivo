import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react"

import React from "react"

export default function EditableText({ text = "text" }) {
   return (
      <>
         <Editable defaultValue={text}>
            <EditablePreview width="full" minW="60px" minH="25px" />
            <EditableInput />
         </Editable>
      </>
   )
}
