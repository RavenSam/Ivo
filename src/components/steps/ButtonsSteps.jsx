import { useRouter } from "next/router"
import { Button } from "@chakra-ui/react"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

export default function ButtonsSteps({ children, step, btnOptions = {}, type = "next", isLoading = false }) {
   const router = useRouter()

   const handleNext = () => router.push({ pathname: "/resume/steps", query: { step } })

   const icon = type === "next" ? { rightIcon: <IoIosArrowForward /> } : { leftIcon: <IoIosArrowBack /> }

   const variant = type === "next" ? "solid" : "outline"

   return (
      <Button variant={variant} {...btnOptions} {...icon} onClick={handleNext} isLoading={isLoading}>
         {children}
      </Button>
   )
}
