import { useMemo, useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Button, Image, useToast } from "@chakra-ui/react"

// 5 MB
const MAX_SIZE = 5242880
const acceptedFilesType = "image/x-png, image/png, image/jpeg, .ico, .svg"

export default function DropHere({ imgSrc, setImgSrc }) {
   const { baseStyle, activeStyle, acceptStyle, rejectStyle } = custumStyles
   const toast = useToast()

   const onDrop = useCallback((acceptedFiles, fileRejections) => {
      // Do something with the files

      const currentFile = acceptedFiles[0]
      const reader = new FileReader()
      reader.addEventListener("load", () => setImgSrc(reader.result), false)

      reader.readAsDataURL(currentFile)

      if (fileRejections.length) {
         toast({
            position: "top-left",
            description:
               fileRejections[0].errors[0].code === "file-too-large"
                  ? "File is larger than 5MB"
                  : fileRejections[0].errors[0].message,
            status: "error",
            duration: 5000,
            isClosable: true,
         })
      }
   }, [])

   const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
      accept: acceptedFilesType,
      onDrop,
      multiple: false,
      maxSize: MAX_SIZE,
   })

   const style = useMemo(
      () => ({
         ...baseStyle,
         ...(isDragActive ? activeStyle : {}),
         ...(isDragAccept ? acceptStyle : {}),
         ...(isDragReject ? rejectStyle : {}),
      }),
      [isDragActive, isDragReject, isDragAccept]
   )

   return (
      <>
         <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <img
               src="\static\images\upload.svg"
               alt="Drop Image Here"
               width="50px"
               height="50px"
               style={{ opacity: ".5" }}
            />
            <p>Drag 'n' drop your image, or click to select it</p>
            <em>image must be inder 5MB</em>
         </div>
      </>
   )
}

const custumStyles = (() => {
   const baseStyle = {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      borderWidth: 2,
      borderRadius: 10,
      borderColor: "#eeeeee",
      borderStyle: "dashed",
      backgroundColor: "rgb(80 80 80 / 5%)",
      color: "#bdbdbd",
      outline: "none",
      cursor: "pointer",
      transition: "border .24s ease-in-out",
   }

   const activeStyle = {
      borderColor: "#2196f3",
   }

   const acceptStyle = {
      borderColor: "#00e676",
   }

   const rejectStyle = {
      borderColor: "#ff1744",
   }

   return { baseStyle, activeStyle, acceptStyle, rejectStyle }
})()
