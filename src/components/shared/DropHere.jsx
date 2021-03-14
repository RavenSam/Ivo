import React, { useMemo, useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Button, Image, useToast } from "@chakra-ui/react"

// 5 MB
const MAX_SIZE = 5242880
const acceptedFilesType = "image/x-png, image/png, image/jpeg, .ico, .svg"

export default function DropHere() {
   const [imgSrc, setImgSrc] = useState(null)

   const { baseStyle, activeStyle, acceptStyle, rejectStyle } = custumStyles
   const toast = useToast()

   const onDrop = useCallback((acceptedFiles, fileRejections) => {
      // Do something with the files

      console.log({ acceptedFiles, fileRejections })

      const currentFile = acceptedFiles[0]
      const reader = new FileReader()
      reader.addEventListener(
         "load",
         () => {
            console.log(reader.result)

            setImgSrc(reader.result)
         },
         false
      )

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
         {imgSrc ? (
            <>
               <Image src={imgSrc} h="130px" w="130px" borderRadius="full" alt="Preview Image" />
            </>
         ) : (
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
         )}
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
      borderRadius: 2,
      borderColor: "#eeeeee",
      borderStyle: "dashed",
      backgroundColor: "#fafafa",
      color: "#bdbdbd",
      outline: "none",
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
