import DropHere from "../shared/DropHere"
import CropImage from "../shared/CropImage"

export default function UploadImage({ setAvatar, avatar }) {
   return (
      <>
         {avatar ? (
            <>
               <CropImage imgSrc={avatar} />
            </>
         ) : (
            <DropHere imgSrc={avatar} setImgSrc={setAvatar} />
         )}
      </>
   )
}
