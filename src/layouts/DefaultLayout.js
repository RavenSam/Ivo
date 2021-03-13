import SimpleHeader from "../components/Header/SimpleHeader"

export default function DefaultLayout({ children }) {
   return (
      <>
         <SimpleHeader />

         {children}
      </>
   )
}
