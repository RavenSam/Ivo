import { Spinner, Flex } from "@chakra-ui/react"

// return a spinner centered
// height 100% of the parent for task
export default function Loading() {
   return (
      <Flex textAlign="center" h="100%" alignItems="center" justifyContent="center" w="100%">
         <Spinner size="lg" color="primary.400" />
      </Flex>
   )
}

// Loading page components return a spinner full page
// only in full pages
export function LoadingPage() {
   return (
      <Flex textAlign="center" h="90vh" alignItems="center" justifyContent="center" w="100%">
         <Spinner size="lg" color="primary.400" />
      </Flex>
   )
}
