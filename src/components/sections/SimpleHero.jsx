import { Container, Heading, Stack, Button, Flex } from "@chakra-ui/react"

export default function SimpleHero() {
   return (
      <Container maxWidth="container.md">
         <Stack height="80vh" justifyContent="center">
            <Heading
               bgGradient="linear(to-l, #7928CA,#FF0080)"
               bgClip="text"
               fontSize={{ base: "35px", md: "50px", lg: "60px" }}
               textAlign="center"
               py="5"
               letterSpacing="wider"
            >
               Welcome NextJs & Chakra UI
            </Heading>

            <Flex alignItems="center" py="5" justifyContent="center">
               <Button mr="2">Solid</Button>

               <Button variant="outline">Outline</Button>
            </Flex>
         </Stack>
      </Container>
   )
}
