export const Button = {
   baseStyle: {
      borderRadius: "30px",

      _focus: {
         boxShadow: "none",
      },
   },

   variants: {
      outline: {
         border: "2px solid",
         borderColor: "primary.400",
         color: "primary.400",
      },
      solid: {
         border: "2px solid",
         borderColor: "primary.400",
         bg: "primary.400",
         color: "white",

         _hover: {
            bg: "primary.800",
            borderColor: "primary.800",
         },
      },
   },
}
