import { useEffect, useState } from "react"
import Link from "next/link"
import { Heading, Container } from "@chakra-ui/react"

export default function LanguagesStep({ setActiveTab }) {
   useEffect(() => setActiveTab(2), [])

   return <Heading>Languages</Heading>
}
