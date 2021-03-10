import Stepper from "react-stepper-horizontal"

const stepsConfig = [
   {
      s: 0,
      title: "Name",
      // component: NameStep,
   },
   {
      s: 1,
      title: "Contact",
      // component: ContactStep,
   },
   {
      s: 2,
      title: "Languages",
      // component: LanguagesStep,
   },
]

export default function Stepp({ steps = stepsConfig, active }) {
   return (
      <>
         <Stepper steps={steps} activeStep={active} />
      </>
   )
}
