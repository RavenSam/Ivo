import { extendTheme } from "@chakra-ui/react"
import { Button } from "./componentStyle"
import { purpleC, indigoC } from "./colors"
import { fonts } from "./fonts"

export const primary = purpleC

export const theme = extendTheme({
   colors: {
      primary,
      indigoC,
      purpleC,
   },

   components: {
      Button,
   },

   fonts,
})
