"use client"

import { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type TCustomForm = {
    formType: "input" | "textarea";
    type?: "text" | "email" | "phone";
    name: string;
    label: string;
    register?: UseFormRegister<FieldValues>;
    errors?: FieldErrors<FieldValues>;
}

const CustomForm = ({formType, name, label, type = "text", register, errors}: TCustomForm) => {
    const [focusedInput, setFocusedInput] = useState("");

  switch (formType) {
    case "input":
        return (
            <>
                <div className='w-full'>
                    <label htmlFor={name} className={`text-[10px] uppercase tracking-widest transition-opacity duration-500 ${focusedInput === name ? "opacity-100" : "opacity-0"}`}>{label}</label>
                    <input {...(register && {...register(name)})} type={type} onFocus={() => setFocusedInput(name)} onBlur={() => setFocusedInput("")} placeholder={label} id={name} className='w-full bg-transparent pt-2 pb-1.5 border-b border-textlight outline-none placeholder:font-serif focus:placeholder:opacity-0 placeholder:transition-opacity placeholder:duration-500 placeholder:delay-300' />
                    {errors && errors[name] && <small className="text-xs text-red-600">{errors[name].message as string}</small>}
                </div>
            </>
        )
    case "textarea":
        return (
            <>
                <div className='w-full'>
                    <label htmlFor={name} className={`text-[10px] uppercase tracking-widest transition-opacity duration-500 ${focusedInput === name ? "opacity-100" : "opacity-0"}`}>{label}</label>
                    <textarea {...(register && {...register(name)})} onFocus={() => setFocusedInput(name)} onBlur={() => setFocusedInput("")} placeholder="I am interested in the property at..." id={name} className='w-full h-30 bg-transparent pt-2 pb-1.5 border-b border-textlight outline-none placeholder:absolute placeholder:bottom-2 placeholder:font-serif focus:placeholder:opacity-0 placeholder:transition-opacity placeholder:duration-500 placeholder:delay-300' />
                </div>
                {errors && errors[name] && <small className="text-xs text-red-600">{errors[name].message as string}</small>}
            </>
        )
  
    default:
        break;
  }
}

export default CustomForm