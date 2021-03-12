import { Heading, Container, Box, Grid, GridItem, Text } from "@chakra-ui/react"
import RightSide from "./RightSide"
import LeftSide from "./LeftSide"

export default function index() {
   return (
      <>
         <Container maxW="container.md" bgGradient="linear(to-b, #1d1cc7, #b51a89)" p="0">
            <Grid templateColumns="repeat(5, 1fr)" gap={2} p="2">
               <GridItem colSpan={2} bg="whiteAlpha.300" borderRadius="md" color="white">
                  <LeftSide />
               </GridItem>

               <GridItem colSpan={3}>
                  <RightSide />
               </GridItem>
            </Grid>
         </Container>
      </>
   )
}
