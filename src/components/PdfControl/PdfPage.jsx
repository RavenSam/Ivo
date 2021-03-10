import { Button, Heading, Container, Grid, GridItem, Box, Stack, Flex } from "@chakra-ui/react"
import { BlobProvider, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"
import { useState } from "react"
import { FaCloudDownloadAlt } from "react-icons/fa"
import { BsFullscreen } from "react-icons/bs"

export default function PdfPage({ PdfComponent }) {
   if (!PdfComponent) return <Heading>No pdf to Show</Heading>

   return (
      <Container maxW="container.lg">
         <Grid templateColumns={["1fr", null, "1fr 450px"]} gap={2}>
            <GridItem w="100%">
               <Container maxW="lg" px="0.5rem" h="100%">
                  <Flex direction="column" h="100%" justify="center">
                     <Heading as="h1">Download your resume</Heading>

                     <Stack mt="4" direction="row" spacing={4} align="center" w="100%" justify="start">
                        <BlobProvider document={<PdfComponent />}>
                           {({ blob, url, loading, error }) => {
                              return (
                                 <a href={url} target="_blank">
                                    <Button variant="outline" rightIcon={<BsFullscreen />}>
                                       View Pdf
                                    </Button>
                                 </a>
                              )
                           }}
                        </BlobProvider>

                        <PDFDownloadLink document={<PdfComponent />} fileName="resume.pdf">
                           {({ blob, url, loading, error }) => (
                              <>
                                 <Button isLoading={loading} variant="solid" rightIcon={<FaCloudDownloadAlt />}>
                                    Download Pdf
                                 </Button>
                              </>
                           )}
                        </PDFDownloadLink>
                     </Stack>
                  </Flex>
               </Container>
            </GridItem>

            <GridItem w="100%" /* d={["none", null, "block"]} */>
               <PDFViewer style={{ height: "100vh", width: "100%" }}>
                  <PdfComponent />
               </PDFViewer>
            </GridItem>
         </Grid>
      </Container>
   )
}
