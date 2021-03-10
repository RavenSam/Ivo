import { Stack, HStack, VStack, Heading, Container, Spacer, Button, Box } from "@chakra-ui/react"

const navLinks = ["Home", "About", "Contact"]

export default function SimpleHeader() {
   return (
      <>
         <Box w="100%" py="4" boxShadow="lg">
            <Container maxW="container.lg">
               <HStack>
                  <Heading>Logo</Heading>

                  <Spacer />

                  <HStack>
                     {navLinks.map((item) => (
                        <Button borderRadius="5px" variant="ghost">
                           {item}
                        </Button>
                     ))}
                  </HStack>
               </HStack>
            </Container>
         </Box>
      </>
   )
}
