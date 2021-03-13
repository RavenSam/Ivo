import { IconButton, useColorMode, Icon } from "@chakra-ui/react"
import { RiSunLine, RiMoonLine } from "react-icons/ri"

export default function ModeSwitch() {
   const { colorMode, toggleColorMode } = useColorMode()

   return (
      <>
         <IconButton
            variant="ghost"
            aria-label="Toggle Theme Mode"
            onClick={toggleColorMode}
            icon={<Icon as={colorMode === "dark" ? RiSunLine : RiMoonLine} boxSize="1.3rem" />}
         />
      </>
   )
}
