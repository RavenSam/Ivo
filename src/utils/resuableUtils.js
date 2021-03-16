// A few JavaScript Functions for Images and Files
// Author: Justin Mitchel
// Source: https://kirr.co/ndywes

// Convert a Base64-encoded string to a File object
export function base64StringtoFile(base64String, filename) {
   let arr = base64String.split(",")
   let mime = arr[0].match(/:(.*?);/)[1]
   let bstr = atob(arr[1])
   let n = bstr.length
   let u8arr = new Uint8Array(n)
   while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
   }
   return new File([u8arr], filename, { type: mime })
}

// Download a Base64-encoded file

export function downloadBase64File(base64Data, filename) {
   var element = document.createElement("a")
   element.setAttribute("href", base64Data)
   element.setAttribute("download", filename)
   element.style.display = "none"
   document.body.appendChild(element)
   element.click()
   document.body.removeChild(element)
}

// Extract an Base64 Image's File Extension
export function base64Extension(base64Data) {
   return base64Data.substring("data:image/".length, base64Data.indexOf(";base64"))
}

// Base64 Image to Canvas with a Crop
export function image64toCanvasRef(canvasRef, image64, pixelCrop) {
   const canvas = canvasRef // document.createElement('canvas');
   canvas.width = pixelCrop.width
   canvas.height = pixelCrop.height
   const ctx = canvas.getContext("2d")
   const image = new Image()
   image.src = image64
   image.onload = function () {
      ctx.drawImage(
         image,
         pixelCrop.x,
         pixelCrop.y,
         pixelCrop.width,
         pixelCrop.height,
         0,
         0,
         pixelCrop.width,
         pixelCrop.height
      )
   }
}

export function getCroppedImg(image, crop, fileName) {
   const canvas = document.createElement("canvas")
   const scaleX = image.naturalWidth / image.width
   const scaleY = image.naturalHeight / image.height
   canvas.width = crop.width
   canvas.height = crop.height
   const ctx = canvas.getContext("2d")

   ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
   )

   // const base64Image = canvas.toDataURL("image/jpeg")
   // As a blob
   return new Promise((resolve, reject) => {
      canvas.toBlob(
         (blob) => {
            blob.name = fileName
            resolve(blob)
         },
         "image/jpeg",
         1
      )
   })
}
