import { extendTheme } from "@chakra-ui/react"
import { Button } from "./componentStyle"
import { purpleC, indigoC,minsk } from "./colors"
import { fonts } from "./fonts"

export const primary = minsk

export const theme = extendTheme({
   colors: {
      primary,
      indigoC,
      purpleC,
      minsk,
   },

   components: {
      Button,
   },

   fonts,
})
