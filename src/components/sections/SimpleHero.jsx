import { Container, Heading, Stack, Button, Flex, HStack, Grid, Box, Text, useColorMode, Image } from "@chakra-ui/react"
import TextLoop from "react-text-loop"
import { primary } from "../../themes"

export default function SimpleHero() {
   const { colorMode } = useColorMode()
   console.log(primary)

   return (
      <Container maxWidth="container.lg">
         <HStack height={["50vh", "60vh", "70vh", "90vh"]} w="100%">
            <Grid templateColumns={["1fr", null, "1fr 1fr"]} w="100%">
               <Box>
                  <Heading
                     bg={colorMode === "dark" ? "#eee" : "gray.700"}
                     color={colorMode === "dark" ? "gray.700" : "white"}
                     p=".3rem .5rem"
                     w="fit-content"
                     as="h2"
                     fontSize={{ base: "14px", md: "20px" }}
                     textTransform="capitalize"
                  >
                     you won't find better
                  </Heading>

                  <Heading
                     maxW="490px"
                     fontSize={{ base: "35px", sm: "48px", md: "50px", lg: "60px" }}
                     as="h1"
                     textTransform="uppercase"
                  >
                     get your resume now it is{" "}
                     <TextLoop>
                        <span>creative</span>
                        <span>fast</span>
                        <span>easy</span>
                        <span>fun</span>
                     </TextLoop>
                     .
                  </Heading>
               </Box>

               <Box d={["none", null, "block"]}>
                  <Image src="/static/images/maker.svg" alt="Simple Hero" />
               </Box>
            </Grid>
         </HStack>
      </Container>
   )
}
