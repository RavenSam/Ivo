import { Heading, Container, Box, Grid, GridItem, Text, Button, Center, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { LoadingPage } from "../../components/shared/Loading"

import { R_1 } from "../../cvs/R_1"
import Confirmation from "../../components/shared/Confirmation"

const dummyData = {
   resume: R_1,
   firstName: "andy",
   lastName: "rockson",
   job: "graphic",
   avatar: "/static/images/avatar.png",
   about: "",
   email: "",
   phone: "",
   site: "",
   languages: [],
}

export default function Cv0001() {
   return (
      <>
         <Confirmation userData={dummyData} />
      </>
   )
}
