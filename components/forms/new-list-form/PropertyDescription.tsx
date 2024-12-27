"use client"

import { CreateNewListContext } from '@/context/CreateNewListContext';
import dynamic from 'next/dynamic';
import React, { useContext, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import 'react-quill-new/dist/quill.snow.css';

const RichTextEditor = dynamic(
    () => import("react-quill-new"),
    { 
        ssr: false ,
        loading: () => <p>Loading ...</p>
    }
)

const PropertyDescription = () => {
    const [value, setValue] = useState('');

    const {dispatch} = useContext(CreateNewListContext)

  return (
    <div className='mt-4 p-3'>
        <h2 className='font-medium'>Description</h2>
        <p className='text-sm text-textlight'>What do you have to say about your property?</p>

        <div className="relative mt-3 w-full rounded-lg">
            <RichTextEditor className='bg-transparent w-full' theme="snow" value={value} onChange={setValue} />
            {value && <button onClick={() => dispatch({ type: "ADD_PROPERTY_DESCRIPTION", payload: value})} className='absolute bottom-4 right-4 shadow-2xl size-10 rounded-full bg-brightPink hover:opacity-70 transition text-white grid place-items-center'><BsArrowRight className='size-5 font-bold' /></button>}
        </div>
    </div>
  )
}

export default PropertyDescription