"use client"

import { CreateNewListContext } from '@/context/CreateNewListContext'
import CustomAlertDialogContext from '@/context/CustomAlertDialogContext'
import { CldUploadButton, CloudinaryUploadWidgetResults } from 'next-cloudinary'
import Image from 'next/image'
import React, { useContext } from 'react'
import { BiImageAdd, BiX } from 'react-icons/bi'
import { CiImageOn } from 'react-icons/ci'
import { toast } from 'sonner'

const MAX_IMAGES_TO_UPLOAD = 16 

const PropertyPhotos = () => {
    const {state, dispatch} =useContext(CreateNewListContext)
    const {alert} = useContext(CustomAlertDialogContext)

    const handleImageUpload = (result: CloudinaryUploadWidgetResults) => {
        const info = result.info as object;

        if("secure_url" in info && "public_id" in info){
            const url = info.secure_url as string;
            const publicId = info.public_id as string; //The public_id is important to remove image from cloudinary when image is deleted by user

            if(state.propertyImages.length < 16){
                dispatch({ type: "ADD_PROPERTY_IMAGES", payload: {url, publicId} })
            } else {
                toast("Maximum of 16 images")
                return;
            }

        }

    }

    const removeImage = (url: string) => {
        // setstate.propertyImages((prevImages) => (
        //     prevImages.filter((image) => image.url !== url)
        // ))

        // TODO - Remove image from cloudinary using public_id
        console.log(url)
    }

  return (
    <div className='mt-4 p-3'>
        <h2 className='font-medium'>Property Photos</h2>
        <div className="flex items-center justify-between">
            <p className='text-sm text-textlight'>Upload a minimum of 5 photos</p>
        { state.propertyImages.length  > 0 ? <div className="text-brightPink bg-[#f72585]/10 font-semibold text-xs px-3 py-1 rounded-lg">{`${state.propertyImages.length}/${MAX_IMAGES_TO_UPLOAD}`}</div> : null}
        </div>
        {state.propertyImages.length ? (
            // PROPERTY IMAGES
            <div className="grid grid-cols-4 gap-3 mt-3">
                {
                    state.propertyImages.slice(0, 16).map(({url}, i) => (
                        <div key={i} className='relative group col-span-2 lg:col-span-1 aspect-square rounded-lg overflow-hidden'>
                            <Image
                                src={url}
                                alt="property image"
                                fill
                                className='object-cover'
                            />
                            {/* REMOVE IMAGE BUTTON */}
                            <button
                                onClick={() => alert(() => removeImage(url), "Are you sure you want to remove this image?")} 
                                className="z-10 absolute right-2 top-2 bg-white size-6 rounded-md place-items-center shadow-sm hover:opacity-70 transition hidden group-hover:grid"
                            >
                                <BiX className="size-4" />
                            </button>
                        </div>
                    ))
                }
                {
                    state.propertyImages.length < 16 && (
                        <CldUploadButton
                            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                            onSuccess={handleImageUpload}
                            className='col-span-2 lg:col-span-1 aspect-square'
                        >
                            <div className="w-full  h-full cursor-pointer border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-center">
                                <BiImageAdd className='size-14 opacity-20' />
                            </div>
                        </CldUploadButton>
            )}
            </div>

        ) : (

            <CldUploadButton
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                onSuccess={handleImageUpload}
                className='w-full aspect-video'
                >
                <div className="w-full h-full cursor-pointer border-2 border-dashed rounded-lg mt-3 flex flex-col items-center justify-center text-center">
                    <CiImageOn className='size-14 opacity-50' />
                    <p className='font-semibold text-sm mt-2 mb-1'>Drag and drop photos here</p>
                    <p className="opacity-70 text-xs">Add at least 5 photos, max of {MAX_IMAGES_TO_UPLOAD}</p>
                </div>
            </CldUploadButton>

        )}
        
    </div>
  )
}

export default PropertyPhotos