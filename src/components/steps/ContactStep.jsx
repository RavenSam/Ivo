import { useEffect } from "react"
import {
   Container,
   FormControl,
   FormLabel,
   FormErrorMessage,
   Input,
   HStack,
   Spacer,
   InputLeftElement,
   InputGroup,
   Icon,
   Text,
} from "@chakra-ui/react"
import ButtonsSteps from "./ButtonsSteps"
import { IoIosMail, IoIosPhonePortrait, IoMdGlobe } from "react-icons/io"

export default function ContactStep({ setActiveTab, formikProps }) {
   useEffect(() => setActiveTab(2), [])

   const { values, errors, touched, handleChange, handleBlur } = formikProps

   // check email, phone, website errors
   // return true if there is at least one error
   // Disable the next button if return true
   const { email, phone, website } = errors
   let isDisabled = !touched.email || phone || website || email ? true : false

   return (
      <>
         <Container maxW="500px" p={[0, ".5rem"]} my="1rem">
            {/* EMAIL ADDRESS ------------------------------------------------------------------- */}
            <FormControl id="email" my=".8rem" isInvalid={errors.email && touched.email}>
               <FormLabel htmlFor="email">Email Address</FormLabel>
               <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<Icon as={IoIosMail} boxSize="1.5rem" />} />
                  <Input
                     type="email"
                     placeholder="johndoe@gmail.com"
                     id="email"
                     name="email"
                     value={values.email}
                     onBlur={handleBlur}
                     onChange={handleChange}
                     isRequired
                  />
               </InputGroup>
               <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            {/* PHONE NUMBER ------------------------------------------------------------------- */}
            <FormControl id="phone" my=".8rem" isInvalid={errors.phone && touched.phone}>
               <FormLabel htmlFor="phone">Phone Number</FormLabel>
               <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<Icon as={IoIosPhonePortrait} boxSize="1.5rem" />} />
                  <Input
                     type="number"
                     placeholder="+123 456 678"
                     id="phone"
                     name="phone"
                     value={values.phone}
                     onBlur={handleBlur}
                     onChange={handleChange}
                     isRequired
                  />
               </InputGroup>
               <FormErrorMessage>{errors.phone}</FormErrorMessage>
            </FormControl>

            {/* WEBSITE ------------------------------------------------------------------- */}
            <FormControl id="website" my=".8rem" isInvalid={errors.website && touched.website}>
               <FormLabel htmlFor="website">
                  Website <Text as="sup">(optional)</Text>
               </FormLabel>
               <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<Icon as={IoMdGlobe} boxSize="1.5rem" />} />
                  <Input
                     type="text"
                     placeholder="www.johndoe.com"
                     id="website"
                     name="website"
                     value={values.website}
                     onBlur={handleBlur}
                     onChange={handleChange}
                  />
               </InputGroup>
               <FormErrorMessage>{errors.website}</FormErrorMessage>
            </FormControl>

            {/* BUTTON ------------------------------------------------------------------- */}
            <HStack mt="1rem">
               <ButtonsSteps step="Name" type="back">
                  Go Back
               </ButtonsSteps>

               <Spacer />

               <ButtonsSteps step="Languages" btnOptions={{ isDisabled }}>
                  Next
               </ButtonsSteps>
            </HStack>
         </Container>
      </>
   )
}
