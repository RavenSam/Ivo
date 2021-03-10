import { Spinner, Flex } from "@chakra-ui/react"

export default function Loading() {
   return (
      <Flex textAlign="center" h="100%" alignItems="center" justifyContent="center" w="100%">
         <Spinner size="lg" color="primary.400" />
      </Flex>
   )
}

export function LoadingPage() {
   return (
      <Flex textAlign="center" h="90vh" alignItems="center" justifyContent="center" w="100%">
         <Spinner size="lg" color="primary.400" />
      </Flex>
   )
}
