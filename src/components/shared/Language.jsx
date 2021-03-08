import { Text, Icon, HStack } from "@chakra-ui/react"
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io"
import Rating from "react-rating"

export default function Language({ lang = "language", r = 0 }) {
   return (
      <>
         <HStack w="100%" mb="1">
            <Text fontSize=".95rem" textTransform="uppercase" color="whiteAlpha.700" mr="auto">
               {lang}
            </Text>

            <Rating
               initialRating={r}
               readonly
               emptySymbol={<Icon as={IoIosRadioButtonOff} boxSize="1.5rem" />}
               fullSymbol={<Icon as={IoIosRadioButtonOn} boxSize="1.5rem" />}
            />
         </HStack>
      </>
   )
}
