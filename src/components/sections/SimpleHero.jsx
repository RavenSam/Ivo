import { Container, Heading, Button, HStack, Grid, Box, Text, useColorMode, Img } from "@chakra-ui/react"
import TextLoop from "react-text-loop"
import Link from "next/link"

export default function SimpleHero() {
   const { colorMode } = useColorMode()

   return (
      <Container maxWidth="container.lg">
         <HStack height={["60vh", null, "80vh", "90vh"]} w="100%">
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
                        <Text as="span" color="primary.400">
                           creative
                        </Text>
                        <Text as="span" color="primary.400">
                           fast
                        </Text>
                        <Text as="span" color="primary.400">
                           easy
                        </Text>
                        <Text as="span" color="primary.400">
                           fun
                        </Text>
                     </TextLoop>
                  </Heading>

                  <Link href="/resume/steps">
                     <a>
                        <Button
                           letterSpacing="2px"
                           my={["1rem", null, "1.5rem"]}
                           textTransform="uppercase"
                           px=" 1.6rem"
                        >
                           Start Now
                        </Button>
                     </a>
                  </Link>
               </Box>

               <Box d={["none", null, "block"]}>
                  <Img src="/static/images/maker.svg" alt="Simple Hero" htmlWidth="440px" htmlHeight="300px" />
               </Box>
            </Grid>
         </HStack>
      </Container>
   )
}
