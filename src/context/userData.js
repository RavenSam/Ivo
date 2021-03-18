import { createContext, useState } from "react"

const UserDataContext = createContext()

export const UserDataProvider = (props) => {
   // Deafault value of user data for resume
   // for now is strored in context
   // may change after using formik
   const [userData, setUserData] = useState({
      resume: null,
      style: null,
      firstName: "",
      lastName: "",
      job: "",
      avatar: "",
      about: "",
      email: "",
      phone: "",
      website: "",
      languages: [],
   })

   const values = { userData, setUserData }

   return <UserDataContext.Provider value={values}>{props.children}</UserDataContext.Provider>
}

export default UserDataContext
