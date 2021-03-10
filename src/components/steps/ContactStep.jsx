import { useEffect, useState } from "react"
import Link from "next/link"
import { Heading, Container } from "@chakra-ui/react"

export default function ContactStep({ setActiveTab }) {
   useEffect(() => setActiveTab(1), [])

   return <Heading>Contact</Heading>
}
