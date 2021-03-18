import { useEffect } from "react"

import { Container, FormControl, FormLabel, FormErrorMessage, Textarea, Input, HStack, Spacer } from "@chakra-ui/react"
import UploadImage from "../sections/UploadImage"
import ButtonsSteps from "./ButtonsSteps"

export default function NameStep({ setActiveTab, formikProps }) {
   useEffect(() => setActiveTab(1), [])

   const { values, errors, touched, handleChange, handleBlur } = formikProps

   // To disable the Next Button
   const { firstName, lastName, job, about } = errors
   let isDisabled = !values.avatar || firstName || lastName || job || about ? true : false

   // Set Avatar Image With Formik
   const setAvatar = (avatar) => formikProps.setValues({ ...values, avatar })

   return (
      <>
         <Container maxW="500px" p={[0, ".5rem"]} my="1rem">
            {/* AVATAR ------------------------------------------------------------------- */}
            <FormControl id="avatar" my=".8rem" isInvalid={!values.avatar}>
               <FormLabel htmlFor="avatar">Avatar</FormLabel>

               <UploadImage setAvatar={setAvatar} avatar={values.avatar} />
               <FormErrorMessage>Upload an image</FormErrorMessage>
            </FormControl>

            {/* FIRST NAME ------------------------------------------------------------------- */}
            <FormControl id="firstName" my=".8rem" isInvalid={errors.firstName && touched.firstName}>
               <FormLabel htmlFor="firstName">First Name</FormLabel>
               <Input
                  onBlur={handleBlur}
                  type="text"
                  placeholder="John"
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                  isRequired={true}
               />
               <FormErrorMessage>{errors.firstName}</FormErrorMessage>
            </FormControl>

            {/* LAST NAME ------------------------------------------------------------------- */}
            <FormControl id="lastName" my=".8rem" isInvalid={errors.lastName && touched.lastName}>
               <FormLabel htmlFor="lastName">Last Name</FormLabel>
               <Input
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Doe"
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  value={values.lastName}
               />
               <FormErrorMessage>{errors.lastName}</FormErrorMessage>
            </FormControl>

            {/* JOB ------------------------------------------------------------------- */}
            <FormControl id="job" my=".8rem" isInvalid={errors.job && touched.job}>
               <FormLabel htmlFor="job">Job</FormLabel>
               <Input
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Web Designer"
                  id="job"
                  name="job"
                  onChange={handleChange}
                  value={values.job}
               />
               <FormErrorMessage>{errors.job}</FormErrorMessage>
            </FormControl>

            {/* ABOUT ------------------------------------------------------------------- */}
            <FormControl id="about" my=".8rem" isInvalid={errors.about && touched.about}>
               <FormLabel htmlFor="about">About</FormLabel>
               <Textarea
                  onBlur={handleBlur}
                  size="sm"
                  type="text"
                  id="about"
                  name="about"
                  placeholder="Tell us something about you"
                  onChange={handleChange}
                  value={values.about}
               />
               <FormErrorMessage>{errors.about}</FormErrorMessage>
            </FormControl>

            {/* BUTTON ------------------------------------------------------------------- */}
            <HStack mt="1rem">
               <ButtonsSteps step="Chose Resume" type="back">
                  Go Back
               </ButtonsSteps>

               <Spacer />

               <ButtonsSteps step="Contact" btnOptions={{ isDisabled }}>
                  Next
               </ButtonsSteps>
            </HStack>
         </Container>
      </>
   )
}
