import { createContext, useState } from "react"

const UserDataContext = createContext()

export const UserDataProvider = (props) => {
   const [userData, setUserData] = useState({
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

   const handleChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value })

   const values = { userData, setUserData, handleChange }

   return <UserDataContext.Provider value={values}>{props.children}</UserDataContext.Provider>
}

export default UserDataContext
