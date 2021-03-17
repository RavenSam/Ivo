import { VStack, Spacer, Icon, IconButton, Text, Flex } from "@chakra-ui/react"
import { RiStarSFill, RiStarSLine } from "react-icons/ri"
import { BsTrash } from "react-icons/bs"
import Rating from "react-rating"

export default function Language({ languages, handleDelete }) {
   return (
      <>
         <VStack mb="1rem">
            {languages.map((language) => (
               <Flex key={language.name} w="100%" p="1rem " borderRadius="lg" boxShadow="s8" align="center">
                  <Text as="strong" w="25%" textTransform="capitalize">
                     {language.name}
                  </Text>

                  <Spacer />

                  <Rating
                     readonly
                     initialRating={language.eval / 10}
                     step={2}
                     stop={10}
                     emptySymbol={<Icon as={RiStarSLine} boxSize={["1.3rem", "1.5rem"]} />}
                     fullSymbol={<Icon as={RiStarSFill} boxSize={["1.3rem", "1.5rem"]} />}
                  />

                  <Spacer />

                  <IconButton
                     size={["sm", "md"]}
                     onClick={() => handleDelete(language.name)}
                     aria-label="Delete Language"
                     variant="ghost"
                     color="#ff006a"
                     icon={<Icon as={BsTrash} boxSize="1.5rem" />}
                  />
               </Flex>
            ))}
         </VStack>
      </>
   )
}
