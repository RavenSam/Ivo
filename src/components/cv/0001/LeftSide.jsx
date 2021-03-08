import { Heading, Box, Text, Avatar, Center, VStack, List, ListItem, Icon, HStack } from "@chakra-ui/react"
import Et from "../../shared/EditableText"
import { IoIosMail, IoIosPhonePortrait, IoMdGlobe, IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io"
import Rating from "react-rating"

export default function LeftSide() {
   return (
      <>
         {/* --------------------------   NAME */}

         <Box p="5">
            <Heading fontWeight="normal">
               <Et text="Andy" />
            </Heading>

            <Heading>
               <Et text="Rockson" />
            </Heading>

            <Text>
               <Et text="Graphic" />
            </Text>
         </Box>

         {/* --------------------------   ABOUT */}
         <Box border="2px solid #fff" borderRadius="xl" mt="30%" bg="whiteAlpha.400">
            <Center mt="-25%">
               <Avatar
                  border="3px solid #fff"
                  size="2xl"
                  mx="auto"
                  name="Kent Dodds"
                  src="https://bit.ly/kent-c-dodds"
               />
            </Center>

            <Box p="5">
               <Heading as="h3" textTransform="uppercase" fontSize="1.2rem">
                  About Me
               </Heading>

               <Text fontSize=".85rem" mt="2" maxH="150px" overflow="hidden">
                  <Et
                     text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ad sapiente voluptas consequuntur.
                  Reprehenderit, accusantium reiciendis blanditiis quis eius repellendus quasi? Iure ipsa porro officiis
                  id nesciunt quos aliquid consequatur?"
                  />
               </Text>
            </Box>
         </Box>

         {/* --------------------------   CONTACT */}
         <VStack spacing={3} p="5" mt="2">
            <HStack py="2" px="4" bg="whiteAlpha.300" borderRadius="50px" w="100%">
               <Icon as={IoIosMail} boxSize="1.5rem" mr="2" />

               <Text fontSize=".9rem" color="whiteAlpha.700">
                  <Et text="andy123@email.com" />
               </Text>
            </HStack>

            <HStack py="2" px="4" fontSize=".9rem" bg="whiteAlpha.300" borderRadius="50px" w="100%">
               <Icon as={IoIosPhonePortrait} boxSize="1.5rem" mr="2" />

               <Text fontSize=".9rem" color="whiteAlpha.700">
                  <Et text="+123 456 789" />
               </Text>
            </HStack>

            <HStack py="2" px="4" fontSize=".9rem" bg="whiteAlpha.300" borderRadius="50px" w="100%">
               <Icon as={IoMdGlobe} boxSize="1.5rem" mr="2" />

               <Text fontSize=".9rem" color="whiteAlpha.700">
                  <Et text="www.rockson-j.com" />
               </Text>
            </HStack>
         </VStack>

         {/* --------------------------   LANGIAGES */}
         <Box spacing={3} p="5" mt="2">
            <Heading as="h3" textTransform="uppercase" fontSize="1.2rem" mb="1rem">
               Languages
            </Heading>

            <HStack w="100%">
               <Text fontSize=".95rem" color="whiteAlpha.700" mr="auto">
                  <Et text="English" />
               </Text>

               <Rating
                  emptySymbol={<Icon as={IoIosRadioButtonOff} boxSize="1.5rem" />}
                  fullSymbol={<Icon as={IoIosRadioButtonOn} boxSize="1.5rem" />}
               />
            </HStack>
         </Box>
      </>
   )
}
